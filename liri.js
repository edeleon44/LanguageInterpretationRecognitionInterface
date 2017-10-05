var keys = require('./keys.js');
var fs = require('fs');
var twitter = require('twitter');
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'b37ab4679b86470bb962af9a9396d1c7',
  secret: '2ab34597f7e4477faa7a5e671015c67b',
});
// var request = require('request');
//
function myTweets() {
	var twitterUsername = process.argv[3];
	var params = {screen_name: "DayToDayPoker"}; 
	var client = new twitter(keys);
	//console.log(keys)
	client.get("statuses/user_timeline/", params, function(error,data,response){
		if(!error){
      for(var i = 0; i < data.length; i++){
        var date = data[i].created_at;
        console.log("-----------------------")
        console.log("@DayToDayPoker: " + data[i].text) 
        console.log(" Created At: " + date.substring(0, 19));
        console.log("-----------------------")
    }
}

		//console.log(data)

	});
}

myTweets();	

//


//

function getMovie(){
var userMovie = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&tomatoes=true&r=json&apikey=40e9cece";
var movie = 'Mr.Nobody';
var request = require('request');
    request(userMovie, function(error, response, body) {
          if (!error && response.statusCode === 200) 
     var movieObject = JSON.parse(body);
    console.log("Title: " + movieObject.Title); 
    console.log("Year: " + movieObject.Year);
    console.log("IMDB Rating: " + movieObject.imdbRating);
    console.log("Country: " + movieObject.Country);
    console.log("Language: " + movieObject.Language);
    console.log("Plot: " + movieObject.Plot);
    console.log("Actors: " + movieObject.Actors);
    console.log("Tomato Rating: " + movieObject.tomatoRating);
    console.log("Tomato URL: " + movieObject.tomatoURL);

      //console.log(movieObject);


})
};
getMovie();

//

spotify.search({ type: 'artist', query: 'Ace of Base' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 

});