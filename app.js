var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.server = require('http').createServer(app);
app.server.listen(app.get('port'), function() {
  console.log("Node app is running at port " + app.server.address().port);
});
