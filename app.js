var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');
app.set('view engine', 'jade');
var formidable = require('formidable');
var fs = require('fs');
var cors = require('cors');
var io = require('socket.io').listen(server, {
  log: false,
  origins: '*:*'
})
var uuid = require('node-uuid');
var sys = require('sys'),
  exec = require('child_process').exec;

app.use(bodyParser.json());
app.use(cors());

var plate = "";

app.get('/', function(req, res) {;
  res.send("API");
});

app.post('/upload', function(req, res) {
  console.log(req.body.results[0].plate);
  plate = req.body.results[0].plate;
});

app.get('/test', function (req, res) {
  res.render('index', { title: 'Plate', message: plate});
});

var server = app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
