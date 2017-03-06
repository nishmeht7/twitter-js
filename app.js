const express = require('express'); 
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

var app = express(); 

nunjucks.configure('/views/index.html');

app.use(volleyball);

// app.use(function(req, res, next){
// 	console.log(req.method+" "+req.url+" "+res.statusCode); 
	
// 	next();
// })

app.get('/', function(req, res){
	//console.log(res)
	res.send("Welcome to Twitter Bitch!");

});

app.get('/news', function(req, res){

	res.send("Twitter sucks!");
});

app.listen(3000, function(){
	console.log("Using port number 3000"); 
});