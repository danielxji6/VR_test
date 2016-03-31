var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
var https = require('https');
var http = require('http');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({
  extended: true
}));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));


// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
