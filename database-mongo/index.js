var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var artistSchema = mongoose.Schema({
  artist: String,
  danciness: String,
  imageLink: String,
  intensity: String,
  spotifyLink: String,
  tempo: String,
  title: String,
  trackId: String,
  wordiness: String
});

var Artist = mongoose.model('Artist', artistSchema);

var saveIt = (tracks) => {
    //console.log('This is the instance', instance);
    for (var i = 0; i < tracks.length; i++) {
      var newTrack = new Artist ({
        artist: tracks[i].artist,
        danciness: tracks[i].danciness,
        imageLink: tracks[i].image,
        intensity: tracks[i].intensity,
        spotifyLink: tracks[i].spotifyLink,
        tempo: tracks[i].tempo,
        title: tracks[i].title,
        trackId: tracks[i].trackId,
        wordiness: tracks[i].wordiness
      })
      newTrack.save(function(error) {
        console.log('Track info should be saved');
        if (error) {
          console.log('Repo save error', error);
        }
      }); 
    }
  }

var selectAll = function(callback) {
  Artist.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveIt = saveIt;