//=== consolidate models in one file

//=== get the models
var Customer = require('./models/customer-model.js'),
    Supplier = require('./models/supplier-model.js'),
    Order    = require('./models/order-model.js'),
    Product  = require('./models/product-model');

module.exports={
  customer : Customer,
  supplier : Supplier,
  Order    : Order,
  Product  : Product
};