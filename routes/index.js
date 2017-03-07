const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function (io) {

    router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
    });

    router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { user: name, tweets: list, showForm: true } );
    });

    router.get('/tweets/:id', function(req, res) {
    var id = Number(req.params.id);
    var list = tweetBank.find( {id: id} );
    res.render( 'index', { tweets: list} );
    });

    router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    var allTweets = tweetBank.list();
    io.sockets.emit('newTweet', allTweets[allTweets.length - 1]);
    res.redirect('/');
    });

    .addEventListener("newTweet", function(){
        console.log("HEY")
    });

    return router;
}


// router.get('public/stylesheets/style.css', function(req, res) {
//     // res.render( 'index', {tweets: "hiya"})
//     // res.sendFile(__dirname + '/style.css')
//         res.sendFile('/Users/jobyrd/Documents/fullstack/wkshp_twitter/public/stylesheets/style.css')
// })

// module.exports = router;
