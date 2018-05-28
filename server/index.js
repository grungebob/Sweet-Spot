var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo/');
 var db = require('../database-mongo/index.js');

 var Spotify = require('node-spotify-api');

 var spotify = new Spotify({
  id: '250b82d6527b4696a27815bc4eab5b2c',
  secret: '3b5374012de24a28a33519d814d577d3'
  });


  /* Load the HTTP library */
  var http = require("http");

  /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Let's get it");
    response.end();
  }).listen(8888);


var app = express();

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


app.get('/artist', function(req, res){
  //console.log('A Search request reached the server')
  //console.log('Client Post res', res);
  //console.log('Client Post req', req);
  var artistQuery = req.query.nameParam;
  //console.log('Server: The artist: ', artistQuery);
  var fullUrl = 'https://api.spotify.com/v1/search?q=' + artistQuery + '&type=artist';
  console.log('Server Url: ', fullUrl);

  var curName = '';
  var curId = '';
  var allTracks = [];
  var infoTracks = {};

  spotify
  .request(fullUrl)
  .then(function(data) {
    
    curName = data.artists.items[0].name;
    //console.log('artist: ', curName)
    curId = data.artists.items[0].id;
    //console.log('curId', curId);
    var newUrl = "https://api.spotify.com/v1/artists/" + curId + "/top-tracks?country=US"
    spotify
    .request(newUrl)
      .then(function(topTracks) {
        //console.log('TopTracks', topTracks);
        //console.log('First track Urls', topTracks.tracks[0].external_urls.spotify)
        for (track of topTracks.tracks) {
          // console.log('track', track);
          // console.log('track images', track.album.images[1].url)
          allTracks.push(infoTracks[track.name] = {
            title: track.name,
            artist: track.artists[0].name,
            trackId: track.id,
            spotifyLink: track.external_urls.spotify,
            image: track.album.images[2].url
            //NOT always available: preview: preview_url
          })
          // if (track.preview_url){
          //   infoTracks[track.name] = {
          //     preview: track.preview_url
          //   }
          //} 
          //console.log('infotracks', infoTracks);
          }
        })
        .then(async() => {
          //addMusicInfo(infoTracks);


          //console.log('infoTracks before getting music info', infoTracks);
           for (track in infoTracks) {
            var infoUrl = 'https://api.spotify.com/v1/audio-features/' + infoTracks[track].trackId;
            // console.log('infoUrl', infoUrl)
            // console.log('current track before request', track);

            await spotify
            .request(infoUrl)
              .then((trackInfo) => { 
                //console.log('current track', track);
                //console.log('current track:', track, 'dance rating', trackInfo.danceability); 
                infoTracks[track].tempo= Math.round(trackInfo.tempo).toString() + 'BPM';
                infoTracks[track].intensity= Math.round(trackInfo.energy * 100).toString() + '%';
                infoTracks[track].wordiness= Math.min(Math.round(trackInfo.speechiness * 200), 100).toString() + '%';
                infoTracks[track].danciness= Math.round(trackInfo.danceability * 100).toString() + '%';
                
                if (trackInfo.key === "0"){
                  infoTracks[track].key = "C";
                } else if (trackInfo.key === "1"){
                  infoTracks[track].key = "C♯, D♭";
                } else if (trackInfo.key === "2"){
                  infoTracks[track].key = "D";
                } else if (trackInfo.key === "3"){
                  infoTracks[track].key = "D♯, E♭";
                } else if (trackInfo.key === "4"){
                  infoTracks[track].key = "E";
                } else if (trackInfo.key === "5"){
                  infoTracks[track].key = "F";
                } else if (trackInfo.key === "6"){
                  infoTracks[track].key = "F♯, G♭";
                } else if (trackInfo.key === "7"){
                  infoTracks[track].key = "G";
                } else if (trackInfo.key === "8"){
                  infoTracks[track].key = "G♯, A♭";
                } else if (trackInfo.key === "9"){
                  infoTracks[track].key = "A";
                } else if (trackInfo.key === "10"){
                  infoTracks[track].key = "A♯, B♭";
                } else if (trackInfo.key === "11"){
                  infoTracks[track].key = "A♯, B♭";
                } else {
                  infoTracks[track].key = trackInfo.key;
                }
                
              })
            }            
      })
      .then(function(data){
              // console.log('After adding info', infoTracks);
              //console.log('all Tracks', allTracks);
              //console.log('Data', data);
              db.saveIt(allTracks);
              res.send(allTracks);

            })
      .catch(function(error){
        console.log(error);
        throw error;
      })
  })
    
      
    //   .then(function(data){
    //     console.log(data);
    //   })
})
/*
var addMusicInfo = async function addMusicInfo(tracks) {
   console.log('congrats bill, youre a law')
  for (track in tracks) {
    var infoUrl = 'https://api.spotify.com/v1/audio-features/' + infoTracks[track].trackId;
    console.log('infoUrl', infoUrl)
    console.log('current track before request', track);

    await spotify
    .request(infoUrl)
      .then((trackInfo) => { 
        console.log('current track', track);
        //console.log('the track:', infoTracks[track], 'dance rating', trackInfo.danceability); 
        infoTracks[track].fakeInfo = 'testInfo';    
        infoTracks[track].danceRating = trackInfo.danceability;
      })
      .then(function(){
        //console.log('After adding info', infoTracks);
      })
    }
  }
*/

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port 3000!');
});

