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

var Customer = require('../models/customer');
router.route('/customers')
  .get(function(req, res) {
    Customer.find(function(err, customers) {
      if (err) res.send(err);
      res.json(customers);
    });
  })
  .post(function(req, res) {
    var customer = new Customer();
    customer.name = req.body.name;
    customer.save(function(err) {
      if (err) res.send(err);
      res.send({ message: 'Customer "' + customer.name + '" created!!' });
    });
  });

module.exports = router;
