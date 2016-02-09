var express = require('express');
var fs = require('fs');
var bodyParser = require("body-parser");
var request = require('request');
var cheerio = require('cheerio');
var app = express();

//var lbc = require('./leboncoin.js');
var output = require('./output.json');
var ma = require('./ma.json');
app.use(express.static('form'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/myserver', function(req, res){

res.sendFile( __dirname  + '/form/index.html');

});

app.post('/returnurl', function(req, res) {
  var p1 = req.param('url'); 
  console.log(p1);
});

app.post('/myserver', function(req, res) {
  var url = req.body.url; 
});



app.listen('8081')
console.log('the server is coming');