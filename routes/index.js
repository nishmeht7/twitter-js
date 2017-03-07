const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('public/stylesheets/style.css', function(req, res) {
//     // res.render( 'index', {tweets: "hiya"})
//     // res.sendFile(__dirname + '/style.css')
//         res.sendFile('/Users/jobyrd/Documents/fullstack/wkshp_twitter/public/stylesheets/style.css')
// })

module.exports = router;