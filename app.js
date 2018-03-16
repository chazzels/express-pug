var express = require("express"); 
var app = express(); 
var http = require("http");
var server = http.createServer(app);


server.listen(8420, '0.0.0.0', function httpServerListen() {
	console.log("http server up");
});

app.use(express.static('client'));
