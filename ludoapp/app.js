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

wss.on("connection", function(ws) {
    //let's slow down the server response time a bit to make the change visible on the client side
    setTimeout(function() {
        console.log("Connection state: "+ ws.readyState);
        ws.send("A");
        ws.send("turn");
        ws.close();
        console.log("Connection state: "+ ws.readyState);
    }, 2000);

    ws.on("message", function incoming(message) {
        console.log("[LOG] " + message);
    });
});






server.listen(port);