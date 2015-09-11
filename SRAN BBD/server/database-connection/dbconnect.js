var mongoose     = require('mongoose');

mongoose.connect('mongodb://localhost/bbcalc');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("DB Connected");
});

module.exports = mongoose;