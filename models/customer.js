var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String
});

var Customer = mongoose.model('Customer', CustomerSchema);

var CustomerProvider = function() {};

CustomerProvider.prototype.findAll = function(callback) {
  Customer.find({}, function(err, customers) {
    callback(err, customers);
  });
};

CustomerProvider.prototype.save = function(params, callback) {
  var customer = new Customer({
    name: params['name']
  });
  customer.save(function(err, customer) {
    callback(err, customer);
  });
};

module.exports = CustomerProvider;
