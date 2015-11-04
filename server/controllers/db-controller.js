var Models = require('../models/Models.js');

module.exports = function(dbName){

this.printDb = function(){
  console.log(dbName);
};

//===find all active customers
this.findActive = function(req, res){
  if(!req.query.name){
    Models[dbName].findActive(function(err, docs){
      if(err) res.send(err);
      res.send(docs);
    });
  }
  else{
    Models[dbName].findByTerm(req.query.name, 
    function(err, docs){
      if(err) res.send(err);
      res.send(docs);
    });
  }
};

//===find one customer by ID
this.findCustomer = function(req, res){
  Models[dbName].findById(req.params._id,
    function(err, doc){
      if(err) res.send(err);
      res.send(doc);
    });
};

//===add a new customer to database
this.addCustomer = function(req,res){
  Models[dbName].create(req.body.addNew, 
    function(err,doc){
      if(err) res.send(err);
      res.send(doc);
    });
};

//===update a customer data
this.updateCustomer = function(req, res){
  Models[dbName].findByIdAndUpdate(req.params._id
    , req.body.updateData
    , {'new' : true}
    , function(err, doc){
        if(err) res.send(err);
        res.send(doc);
    });
};

//===simulates delete by making customer inactive
this.deleteCustomer = function(req, res){
  if(!req.query.hard){
    Models[dbName].findByIdAndUpdate(req.params._id
      , {active:false}
      , {'new':true}
      , function(err, doc){
          if(err) res.send(err);
          res.send(doc);
      });
  }
  else{
    Models[dbName].findByIdAndRemove(req.params._id
      , function(err, doc){
        if(err) res.send(err);
        res.send({"_id": doc._id, "deleted": true});
      }
    );
  }
};
};