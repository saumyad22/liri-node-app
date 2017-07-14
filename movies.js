var request = require("request");

function conCatArgs(input){
var args = [];
for(i = 0; process.argv.length - 2 > i; i++){
    args[i] = input[i + 2]
}
console.log(args);
}
conCatArgs(process.argv);
var title = process.argv[2];

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


