var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

var router = require('./routes/router');
app.use('/', router);

app.server = require('http').createServer(app);
app.server.listen(app.get('port'), function() {
  console.log("Node app is running at port " + app.server.address().port);
});
