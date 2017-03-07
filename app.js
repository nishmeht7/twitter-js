const express = require('express'); 
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

var app = express(); 


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates


// nunjucks.render('index.html', {title: 'An Example', people: [{name: 'gandolf'}, {name: 'hermoione'}, {name: 'Frodo'}]}, function(err, res){
// 	if (err) throw err; 
// 	console.log(res); 
// })

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(volleyball); //volleyball is middleware that gets the status of the response 

// app.get('/', function(req, res){
// 	res.render( 'index', {title: 'Welcome to twitter Bitch', people: people} );
// });

// app.get('/news', function(req, res){
// 	res.render('index', {title:"Twitter sucks!"});
// });


var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', routes(io));
app.use(express.static('public'));

// app.listen(3000, function(){
// 	console.log("Using port number 3000"); 
// });