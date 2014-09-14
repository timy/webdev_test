var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.send('About page');
});

router.route('/json-test')
  .get(function(req, res) {
    res.json({ message: 'You get the JSON structure!' });
  })
  .post(function(req, res) {
    res.json(req.body);
  });

module.exports = router;
