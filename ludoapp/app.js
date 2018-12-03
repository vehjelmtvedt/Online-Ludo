var express = require("express");
var http = require("http");
var port = process.argv[2];
var app = express();
var Game = require("./game");
var gameStatTracker = require("./stattracker");
var websocket = require("ws");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//TODO: move to routes/index
app.get("/", (req, res) => {
    res.render("splash.ejs");
});

app.get("/play", (req, res) => {
    res.render("game.ejs");
});

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};

var currentGame = new Game(gameStatTracker.gamesInitialized++);
var connectionID = 0;

wss.on("connection", function connection(ws) {
    
    let con = ws;
    con.id = connectionID++;
    let playerID = currentGame.addPlayer(con);
    
    
    
    websockets[con.id] = currentGame;

    console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerID);


    //Send to client added which playerID it has. Send to all OP's that this player is added.
    if (playerID === 'A') {
        con.send(playerID);
    }
    else if (playerID === 'B') {
        con.send(playerID);
        currentGame.playerA.send("OP B");
        currentGame.playerB.send("OP A");
    }
    else if (playerID === 'C') {
        con.send(playerID);
        currentGame.playerA.send("OP C");
        currentGame.playerB.send("OP C");
        currentGame.playerC.send("OP A");
        currentGame.playerC.send("OP B");
    }
    else if (playerID === 'D') {
        con.send(playerID);
        currentGame.playerA.send("OP D");
        currentGame.playerB.send("OP D");
        currentGame.playerC.send("OP D");
        currentGame.playerD.send("OP A");
        currentGame.playerD.send("OP B");
        currentGame.playerD.send("OP C");
    }

    if (currentGame.hasFourConnectedPlayers()) {
        
        console.log("Game has started");
        currentGame.playerA.send("turn");        
        currentGame = new Game(gameStatTracker.gamesInitialized++);
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
                console.log("Message received from client: No move is made: next player's turn")
                gameObj.playerB.send("turn");
            }
            else if (message.includes("NAME")) {
                if (gameObj.playerB !== null) {
                    gameObj.playerB.send(message);

                    if (gameObj.playerC !== null) {
                        gameObj.playerC.send(message);

                        if (gameObj.playerD !== null) {
                            gameObj.playerD.send(message);
                        }
                    }
                }
            }
            else if (message.includes("DICEROLL")) {
                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerB.send(message);
                    gameObj.playerC.send(message);
                    gameObj.playerD.send(message);
                }
            }
            else if (message.includes("MOVEDHOME")) {
                gameObj.playerB.send(message + " A");
                gameObj.playerC.send(message + " A");
                gameObj.playerD.send(message + " A");
            }
        }
        else if (con == gameObj.playerB) {

            if (message === "NO MOVE") {
                console.log("Message received from client: No move is made: next player's turn")
                gameObj.playerC.send("turn");
            }
            else if (message.includes("NAME")) {
                if (gameObj.playerA !== null) {
                    gameObj.playerA.send(message);

                    if (gameObj.playerC !== null) {
                        gameObj.playerC.send(message);

                        if (gameObj.playerD !== null) {
                            gameObj.playerD.send(message);
                        }
                    }
                }
                
            }
            else if (message.includes("DICEROLL")) {
                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerA.send(message);
                    gameObj.playerC.send(message);
                    gameObj.playerD.send(message);
                }
            }
            else if (message.includes("MOVEDHOME")) {
                gameObj.playerA.send(message + " B");
                gameObj.playerC.send(message + " B");
                gameObj.playerD.send(message + " B");
            }

        }
        else if (con == gameObj.playerC) {

            if (message === "NO MOVE") {
                console.log("Message received from client: No move is made: next player's turn")
                gameObj.playerD.send("turn");
            }
            else if (message.includes("NAME")) {
                
                if (gameObj.playerA !== null) {
                    gameObj.playerA.send(message);

                    if (gameObj.playerB !== null) {
                        gameObj.playerB.send(message);

                        if (gameObj.playerD !== null) {
                            gameObj.playerD.send(message);
                        }
                    }
                }
                
            }
            else if (message.includes("DICEROLL")) {
                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerA.send(message);
                    gameObj.playerB.send(message);
                    gameObj.playerD.send(message);
                }
            }
            else if (message.includes("MOVEDHOME")) {
                gameObj.playerA.send(message + " C");
                gameObj.playerB.send(message + " C");
                gameObj.playerD.send(message + " C");
            }
            

        }
        else if (con == gameObj.playerD) {

            if (message === "NO MOVE") {
                console.log("Message received from client: No move is made: next player's turn")
                gameObj.playerA.send("turn");
            }
            else if (message.includes("NAME")) {
                gameObj.playerA.send(message);
                gameObj.playerB.send(message);
                gameObj.playerC.send(message);
            }
            else if (message.includes("DICEROLL")) {
                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerA.send(message);
                    gameObj.playerC.send(message);
                    gameObj.playerB.send(message);
                }
            }
            else if (message.includes("MOVEDHOME")) {
                gameObj.playerB.send(message + " D");
                gameObj.playerC.send(message + " D");
                gameObj.playerA.send(message + " D");
            }

        }

    });
});






server.listen(port);