var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


app.get('/something', function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    var data = {status: 'Its alive!'};
    res.send(JSON.stringify(data));
    
});

app.listen(process.env.PORT || 8081);
console.log('Magic happens on port 8081');
exports = module.exports = app;