var input = process.argv[2];

 switch (input) {
  case "my-tweets":
   twitterSearch();
    break;
  case "spotify-this-song":
    spotifySong();
    break;
  case "movie-this":
    movies();
    break;
  case "do-what-it-says":
    playSong();
    break;
}

function twitterSearch(){
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
}

function spotifySong(){
 var Spotify = require('node-spotify-api');
 var spotify = new Spotify({
  id: '85d7236096564be3914fcf435cc92da7',
  secret: '8bb800ab6bef497ab7a6b03bbf52b633'
 });

function conCatArgs(input){
  var args = [];
   for(i = 0; process.argv.length - 2 > i; i++){
    args[i] = input[i + 2]
   }
  console.log(args);
 }
  conCatArgs(process.argv);
  var song = process.argv[3];

  if(process.argv[3] == ' ' || process.argv[3] == undefined){
    spotify.search({ type: 'track', query: 'The sign' }, function(err, data) {
     if (err) {
     return console.log('Error occurred: ' + err);
     }
    var songInfo = data.tracks.items[0];
    var songResult = console.log('Artist: ' + songInfo.artists[0].name);
                     console.log('Name: ' + songInfo.name);
                     console.log('Album: ' + songInfo.album.name);
                     console.log('Url: ' + songInfo.preview_url);
    // console.log(songResult);
      });
    }  
    else{
    	spotify.search({ type: 'track', query: song }, function(err, data) {
   if (err) {
    return console.log('Error occurred: ' + err);
   }
     else{
      var songInfo = data.tracks.items[0];
      var songResult = console.log('Artist: ' + songInfo.artists[0].name);
                     console.log('Name: ' + songInfo.name);
                     console.log('Album: ' + songInfo.album.name);
                     console.log('Url: ' + songInfo.preview_url);
     }
     });

    }
}

function movies(){
 var request = require("request");

 function conCatArgs(input){
  var args = [];
   for(i = 0; process.argv.length - 2 > i; i++){
    args[i] = input[i + 2]
   }
  console.log(args);
  }
  conCatArgs(process.argv);
  var title = process.argv[3];

 request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
 
  if (!error && response.statusCode === 200) {

   if(title == ""){
    title = "Mr. Nobody";
  	var data = JSON.parse(body);
    console.log("Year: " + data.Year);
    console.log("Title: " + data.Title);
    console.log("IMDB Rating: " + data.imdbRating);
    console.log("Country: " + data.Country);
    console.log("Language: " + data.Language);
    console.log("Plot: " + data.Plot);
    console.log("Actors: " + data.Actors);
   }

 else{
    var data = JSON.parse(body);
    console.log("Year: " + data.Year);
    console.log("Title: " + data.Title);
    console.log("IMDB Rating: " + data.imdbRating);
    console.log("Country: " + data.Country);
    console.log("Language: " + data.Language);
    console.log("Plot: " + data.Plot);
    console.log("Actors: " + data.Actors);
  }
 
 }


 });

}

function playSong(){
 var fs = require('fs');
 fs.readFile('random.txt', 'utf8', function(err, response){
	if(err){
		return console.log(err);
	}
	else{
		console.log(response);
		process.argv[3] = response;
		spotifySong();
	}
  


 })	
}
