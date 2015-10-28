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

//===add a new customer to database
module.exports.addCustomer = function(req,res){
  Customer.create(req.body.customer, 
    function(err,customer){
      if(err) res.send(err);
      res.send(customer);
    });
};

//===update a customer data
module.exports.updateCustomer = function(req, res){
  Customer.findOneByIdAndUpdate(req.params.customer_id
    , req.body.customerUpdate
    , function(err, customer){
        if(err) res.send(err);
        res.send(customer);
    });
};

//===simulates delete by making customer inactive
module.exports.deleteCustomer = function(req, res){
  Customer.findOneByIdAndUpdate(req.params.customer_id
    , {active:false}
    , function(err, customer){
        if(err) res.send(err);
        res.send(customer);
    });
};