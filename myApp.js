var express = require('express');
var app = express();

//app.METHOD(PATH, HANDLER)
// HANDLER -> function(req, res) {...}
app.get('/', function(req, res){
  res.send('Hello Express');
});


































 module.exports = app;
