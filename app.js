var express = require('express');
 
var app = express();
var sys = require('sys')

console.log("hello");
app.get('/', function (req, res) {
  res.send('hello u ');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
