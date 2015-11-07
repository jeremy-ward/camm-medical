//=== consolidate models in one file

//=== get the models
var Customer = require('./customer-model.js'),
    Supplier = require('./supplier-model.js'),
    Order    = require('./order-model.js'),
    Product  = require('./product-model');

module.exports={
  customer : Customer,
  supplier : Supplier,
  Order    : Order,
  Product  : Product
};