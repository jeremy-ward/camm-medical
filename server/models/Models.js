//=== consolidate models in one file

//=== get the models
var Customer = require('./customer-model.js'),
    Supplier = require('./supplier-model.js'),
    Order    = require('./order-model.js');

module.exports={
  customer: Customer,
  supplier: Supplier,
  Order: Order
};