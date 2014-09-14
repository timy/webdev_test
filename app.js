var uriString = process.env.MONGOHQ_URL || 'mongodb://localhost/webdev';
require('mongoose').connect(uriString, function(err, res) {
  if (err) console.log('Error connecting to: ' + uriString + '. ' + err);
  else console.log('Succeeded connected to: ' + uriString);
});

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.use(require('body-parser').urlencoded({extended: false}));
app.use('/', require('./routes/router'));

app.server = require('http').createServer(app);
app.server.listen(app.get('port'), function() {
  console.log("Node app is running at port " + app.server.address().port);
});
