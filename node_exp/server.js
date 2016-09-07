var http = require('http');
var express = require('express');
var app = express();
var colors = require('colors');
var port = process.env.port || 3000;


app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/views', express.static(__dirname + '/views'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html"); 
});

app.listen(port, function () {
    console.log(('Example app listening on port: ' + port).rainbow);
});
