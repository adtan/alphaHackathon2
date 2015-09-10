var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/client/html');
app.set('view engine', 'html');

// path setup
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', require('./server/routes/routes'));


mongoose.connect('mongodb://localhost/hackathonDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("DB Connected");
});

module.exports = mongoose.model('Site', new Schema());


// Start server
var serverPort = 4000;
app.listen(serverPort, function() {
   console.log("Server started on port "+serverPort);
});

// Expose app
module.exports = app;
