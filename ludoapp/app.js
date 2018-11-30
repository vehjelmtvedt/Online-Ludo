var express = require("express");
var http = require("http");
var port = process.argv[2];
var app = express();

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



server.listen(port);