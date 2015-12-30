// Import dependencies
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var app = express();

// Middleware
app.use(favicon(__dirname + '/favicon.ico'));

// Route handling
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:date', function(req, res) {
  
});


// Server initialization
app.listen(9000);
console.log('Listening on port 9000');
