var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Customer', CustomerSchema);
