var Models = require('../models/Models.js');

module.exports = function(dbName){

this.printDb = function(){
  console.log(dbName);
};

//===find all active customers
this.findActive = function(req, res){
  if(!req.query.name){
    Models[dbName].findActive(function(err, customers){
      if(err) res.send(err);
      res.send(customers);
    });
  }
  else{
    Models[dbName].findByTerm(req.query.name, 
    function(err, customers){
      if(err) res.send(err);
      res.send(customers);
    });
  }
};

//===find one customer by ID
this.findCustomer = function(req, res){
  Models[dbName].findById(req.params.customer_id,
    function(err, customer){
      if(err) res.send(err);
      res.send(customer);
    });
};

//===add a new customer to database
this.addCustomer = function(req,res){
  Models[dbName].create(req.body.customer, 
    function(err,customer){
      if(err) res.send(err);
      res.send(customer);
    });
};

//===update a customer data
this.updateCustomer = function(req, res){
  Models[dbName].findByIdAndUpdate(req.params.customer_id
    , req.body.customerUpdate
    , {'new' : true}
    , function(err, customer){
        if(err) res.send(err);
        res.send(customer);
    });
};

//===simulates delete by making customer inactive
this.deleteCustomer = function(req, res){
  Models[dbName].findByIdAndUpdate(req.params.customer_id
    , {active:false}
    , {'new':true}
    , function(err, customer){
        if(err) res.send(err);
        res.send(customer);
    });
};
};