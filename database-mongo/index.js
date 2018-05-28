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

var saveIt = (instance) => {
    console.log('This is the instance', instance);
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