var Customer = require('../models/customer-model.js');

//===search by term provided
module.exports.findByTerm = function(req, res){
  Customer.findByTerm(req.body.searchTerm, 
    function(err, customers){
      if(err) res.send(err);
      res.send(customers);
    }
  );
};

//===find all active customers
module.exports.findActive = function(req, res){
  Customer.findActive(function(err, customers){
    if(err) res.send(err);
    res.send(customers);
  });
};

//===find one customer by ID
module.exports.findCustomer = function(req, res){
  Customer.findById(req.params.customer_id,
    function(err, customer){
      if(err) res.send(err);
      res.send(customer);
    });
};