var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('main/index');
});

router.get('/about', function(req, res) {
  res.render('about/index');
});

router.route('/json-test')
  .get(function(req, res) {
    res.json({ message: 'You get the JSON structure!' });
  })
  .post(function(req, res) {
    res.json(req.body);
  });

var customerProvider = new (require('../models/customer'))();

router.route('/customers')
  .get(function(req, res) {
    customerProvider.findAll(function(err, customers) {
      if (err) res.send(err);
      res.json(customers);
    });
  })
  .post(function(req, res) {
    customerProvider.save(req.body, function(err, customer) {
      if (err) res.send(err);
      res.send({ message: 'Customer ' + customer.name + ' created!!' });
    });
  });

router.route('/customers/:id')
  .get(function(req, res) {
    customerProvider.findById(req.params.id, function(err, customer) {
      if (err) res.send(err);
      res.json(customer);
    });
  })
  .put(function(req, res) {
    customerProvider.updateById(req.params.id, req.body, function(err, customer) {
      if (err) res.send(err);
      res.json({ message: 'updated!' });
    });
  })
  .delete(function(req, res) {
    customerProvider.removeById(req.params.id, function(err, customer) {
      if (err) res.send(err);
      res.json({ message: 'deleted!' });
    });
  });

module.exports = router;
