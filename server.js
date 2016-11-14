var express = require('express');
var path = require('path');
var toHex = require('colornames');
var port = 8000; 

var app = express(); 

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/colors', function(req, res) {
	res.json(toHex.all());
});

var server = app.listen(port, function() {
	console.log(`Listening on ${port}`);
});