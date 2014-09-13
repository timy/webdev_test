var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.server = require('http').createServer(app);
app.server.listen(app.get('port'), function() {
  console.log("Node app is running at port " + app.server.address().port);
});
