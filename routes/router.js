var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.send('About page');
});

module.exports = router;
