const express = require('express'); 
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

var app = express(); 

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true}); // point nunjucks to the proper directory for templates

// nunjucks.render('index.html', {title: 'An Example', people: [{name: 'gandolf'}, {name: 'hermoione'}, {name: 'Frodo'}]}, function(err, res){
// 	if (err) throw err; 
// 	console.log(res); 
// })

app.use(volleyball); //volleyball is middleware that gets the status of the response 

app.get('/', function(req, res){
	res.render( 'index', {title: 'Welcome to twitter Bitch', people: people} );
});

app.get('/news', function(req, res){
	res.render('index', {title:"Twitter sucks!"});
});

app.listen(3000, function(){
	console.log("Using port number 3000"); 
});