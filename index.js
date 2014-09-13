var express = require('express');
var app = express();

var mongoose = require('mongoose');
var uriString = process.env.MONGOHQ_URL || 'mongodb://localhost/HelloMongoose';

mongoose.connect(uriString, function(err, res) {
  if (err) console.log('Error connecting to: ' + uriString + '. ' + err);
  else console.log('Succeeded connected to: ' + uriString);
});

var userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: { type: String, trim: true }
  },
  age: { type: Number, min: 0 }
});

var PowerUser = mongoose.model('PowerUser', userSchema);

PowerUser.remove({}, function(err) {
  if (err) console.log('Error deleting old data.');
});

var johnDoe = new PowerUser({
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 25
});

var JaneDoe = new PowerUser({
  name: {
    first: 'Jane',
    last: 'Joe'
  },
  age: 65
});

var aliceSmith = new PowerUser({
  name: {
    first: 'Alice',
    last: 'Smith'
  },
  age: 45
});

johnDoe.save(function(err) { if (err) console.log('Error on save!!'); });
JaneDoe.save(function(err) { if (err) console.log('Error on save!!'); });
aliceSmith.save(function(err) { if (err) console.log('Error on save!!'); });

var found = ['DB Connection not yet established. You should try and check.'];

function createWebpage (req, res) {
  PowerUser.find({}).exec(function(err, result) {
    if (!err) {
      res.write(html1 + JSON.stringify(result, undefined, 2) + html2 + result.length + html3);
      var query = PowerUser.find({'name.last': 'Doe'});
      query.where('age').gt(32);
      query.exec(function(err, result) {
        if (!err) {
          res.end(html4 + JSON.stringify(result, undefined, 2) +
                  html5 + result.length + html6);
        } else {
          res.end('Error in second query. ' + err);
        }
      });
    } else {
      res.end('Error in first query. ' + err);
    };
  });
}


var html1 = '<title> hello-mongoose: MongoLab MongoDB Mongoose Node.js Demo on Heroku </title> \
  <head> \
  <style> body {color: #394a5f; font-family: sans-serif} </style> \
</head> \
  <body> \
  <h1> hello-mongoose: MongoLab MongoDB Mongoose Node.js Demo on Heroku </h1> \
See the <a href="https://devcenter.heroku.com/articles/nodejs-mongoose">supporting article on the Dev Center</a> to learn more about data modeling with Mongoose. \
  <br\> \
  <br\> \
  <br\> <h2> All Documents in MonogoDB database </h2> <pre><code> ';
var html2 = '</code></pre> <br\> <i>';
var html3 = ' documents. </i> <br\> <br\>';
var html4 = '<h2> Queried (name.last = "Doe", age >64) Documents in MonogoDB database </h2> <pre><code> ';
var html5 = '</code></pre> <br\> <i>';
var html6 = ' documents. </i> <br\> <br\> \
  <br\> <br\> <center><i> Demo code available at <a href="http://github.com/mongolab/hello-mongoose">github.com</a> </i></center>';





app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  // res.send('Hello World!');
  createWebpage(req, res);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
