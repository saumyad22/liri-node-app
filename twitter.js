
var Twitter = require('twitter');
var key = require('./keys.js');
var client = new Twitter(key.twitterKeys);

// Set up your search parameters
var params = {
	screen_name: 'BarackObama',
	count: 20
};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(JSON.stringify(tweets, null, 2));
    for(var i=0; i<tweets.length; i++){


    console.log(i + ": "+ tweets[i].text);
  }
    }
});


