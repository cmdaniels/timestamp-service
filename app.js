// Import dependencies
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

// Initialize Express App
var app = express();
var port = process.env.PORT || 8080;

// Middleware
app.use(favicon(__dirname + '/favicon.ico'));

// Route handling
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:date', function(req, res) {
  var date;
  var options = {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  if(isNaN(req.params.date)) {
    date = new Date(req.params.date + " UTC");
    if(date == "Invalid Date") {
      res.json({
        unix: null,
        natural: null
      });
    } else {
      res.json({
        unix: date.getTime() / 1000,
        natural: date.toLocaleDateString('en-US', options)
      });
    }
  } else {
    date = new Date(+req.params.date*1000);
    res.json({
      unix: +req.params.date,
      natural: date.toLocaleDateString('en-US', options)
    });
  }
});


// Server initialization
app.listen(port);
console.log('Listening on port ' + port);
