var express = require("express");
var http = require("http");
var port = process.argv[2];
var app = express();
var game = require("./game");
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

var currentGame = new Gamepad(gameStatTracker.gamesInitialized++);
var connectionID = 0;

wss.on("connection", function connection(ws) {
    
    let con = ws;
    con.id = connectionID++;
    let playerID = currentGame.addPlayer(con);
    websockets[con.id] = currentGame;

    console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerType);

    con.send(playerType);

    if (currentGame.hasFourConnectedPlayers()) {
        currentGame = new Gamepad(gameStatTracker.gamesInitialized++);
    }


    /*
     * message coming in from a player:
     *  1. determine the game object
     *  2. determine the opposing players.
     *  3. send the message to all OP's.
     */ 


    con.on("message", function incoming(message) {

        let receivedMessage = JSON.parse(message);

        let gameObj = websockets[con.id];
        
        //handle NO MOVE from client and communicate to all other players.
        if (con == gameObj.playerA) {

            if (receivedMessage.type = messages.C_NO_MOVE) {
                console.log("Message received from client: No move is made")
                var oMsg = JSON.stringify(messages.C_YOUR_TURN);
                oMsg.data = "B";
                

                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerB.send(message);
                    gameObj.playerB.send(oMsg);
                    gameObj.playerC.send(message);
                    gameObj.playerD.send(message);

                }
            }

        }
        else if (con == gameObj.playerB) {

            if (receivedMessage.type = messages.C_NO_MOVE) {
                console.log("Message received from client: No move is made")
                var oMsg = JSON.stringify(messages.C_YOUR_TURN);
                oMsg.data = "C";

                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerA.send(message);
                    gameObj.playerC.send(message);
                    gameObj.playerC.send(oMsg);
                    gameObj.playerD.send(message);

                }
            }

        }
        else if (con == gameObj.playerC) {

            if (receivedMessage.type = messages.C_NO_MOVE) {
                console.log("Message received from client: No move is made")
                var oMsg = JSON.stringify(messages.C_YOUR_TURN);
                oMsg.data = "D";

                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerA.send(message);
                    gameObj.playerB.send(message);
                    gameObj.playerD.send(message);
                    gameObj.playerD.send(oMsg);

                }
            }

        }
        else if (con == gameObj.playerB) {

            if (receivedMessage.type = messages.C_NO_MOVE) {
                console.log("Message received from client: No move is made")
                var oMsg = JSON.stringify(messages.C_YOUR_TURN);
                oMsg.data = "A";

                if (gameObj.hasFourConnectedPlayers()) {
                    gameObj.playerA.send(message);
                    gameObj.playerA.send(oMsg);
                    gameObj.playerC.send(message);
                    gameObj.playerD.send(message);

                }
            }

        }

    });
    






});






server.listen(port);