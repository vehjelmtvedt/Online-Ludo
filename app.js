var express = require("express");
var http = require("http");
var port = process.env.PORT || 5000;
var app = express();
var Game = require("./game");
var gameStatus = require("./stattracker");
var websocket = require("ws");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//TODO: move to routes/index
app.get('/', (req, res) => {
    res.render('splash.ejs', { gamesInitialized: gameStatus.gamesInitialized, gamesCompleted: gameStatus.gamesCompleted, gamesAborted: gameStatus.gamesAborted });
})

app.get("/play", (req, res) => {
    res.render("game.ejs");
});

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};

var currentGame = new Game(gameStatus.gamesInitialized++);
var connectionID = 0;

wss.on("connection", function connection(ws) {
    
    let con = ws;
    con.id = connectionID++;
    let playerID = currentGame.addPlayer(con);
    
    websockets[con.id] = currentGame;

    console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerID);


    //Send to client added which playerID it has. Send to OP that this player is added.
    if (playerID === 'A') {
        con.send(playerID);
    }
    else if (playerID === 'B') {
        con.send(playerID);
        currentGame.playerA.send("OP B");
        currentGame.playerB.send("OP A");
    }
    
    //start game if it has two connected players
    if (currentGame.hasTwoConnectedPlayers()) {
        
        console.log("Game has started");
        currentGame.playerA.send("turn");        
        currentGame.playerA.send("restorePositions");
        currentGame.playerB.send("restorePositions");
        currentGame = new Game(gameStatus.gamesInitialized++);
    }


    /*
     * message coming in from a player:
     *  1. determine the game object
     *  2. determine the opposing players.
     *  3. send the message to all OP's.
     */ 


    con.on("message", function incoming(message) {

        

        let gameObj = websockets[con.id];
        
        //handle NO MOVE from client and communicate to all other players.
        if (con == gameObj.playerA) {
            

            if (message === "NO MOVE") {
                console.log("Message received from player A: No move is made: player B's turn")
                gameObj.playerB.send("turn");
            }
            else if (message.includes("NAME")) {
                gameObj.playerB.send(message);
            }

            else if (message.includes("DICEROLL")) {
                if (gameObj.hasTwoConnectedPlayers()) {
                    gameObj.playerB.send(message);
                }
            }
            else if (message.includes("MOVEDHOME")) {
                gameObj.playerB.send(message);
            }

            //message: NMOVE PLAYERID CELLID
            else if (message.includes("NMOVE")) {
                console.log("Received from B: " + message);
                gameObj.playerB.send(message);
            }
            else if (message.includes("turn")) {
                gameObj.playerB.send(message);
            }
            else if (message.includes("WIN")) {
                gameObj.playerB.send("WIN");
                gameStatus.gamesCompleted++;
            }
        }

        else if (con == gameObj.playerB) {

            if (message === "NO MOVE") {
                console.log("Message received from client: No move is made: next player's turn")
                gameObj.playerA.send("turn");
            }
            else if (message.includes("NAME")) {
                if (gameObj.playerA !== null) {
                    gameObj.playerA.send(message);
                }
                
            }
            else if (message.includes("DICEROLL")) {
                if (gameObj.hasTwoConnectedPlayers()) {
                    gameObj.playerA.send(message);
                    
                }
            }
            else if (message.includes("MOVEDHOME")) {
                gameObj.playerA.send(message);
            }
            //message: NMOVE PLAYERID CELLID
            else if (message.includes("NMOVE")) {
                console.log("Received from A: " + message);
                gameObj.playerA.send(message);
            }
            else if (message.includes("turn")) {
                gameObj.playerA.send(message);
            }
            else if (message.includes("WIN")) {
                gameObj.playerA.send("WIN");
                gameStatus.gamesCompleted++;
            }

        }
        
    });
});






server.listen(port);