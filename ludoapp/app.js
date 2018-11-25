var express = require("express");
var http = require("http");
var indexRouter = require("./routes/index");
var port = process.argv[2];
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/play", indexRouter);

//TODO: move to routes/index
app.get("/", (req, res) => {
    res.render("splash.ejs");
});

var server = http.createServer(app);



server.listen(port);