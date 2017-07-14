var fs = require('fs');
 fs.readFile('random.txt', 'utf8', function(err, data){
	if(err){
		return console.log(err);
	}
	else{
			spotify.search({ type: 'track', query: data }, function(err, response) {
   if (err) {
    return console.log('Error occurred: ' + err);
   }
     else{
      var songInfo = response.tracks.items[0];
      var songResult = console.log('Artist: ' + songInfo.artists[0].name)
                     console.log('Name: ' + songInfo.name)
                     console.log('Album: ' + songInfo.album.name)
                     console.log('Url: ' + songInfo.preview_url)
     }
     });
	}
  // spotifySong();


})	