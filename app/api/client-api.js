//=== api routes for interaction with client database =====
//=== "api/client..."

//=== get required dependencies
var express = require('express');
var router=express.Router();
var Client = require('../models/client-model.js');

//=== set up api routes =========================

//=== gets all clients ===================
router.get('/find', function(req, res){
  Client.find({active: true}, function(err, clients){
    if(err) res.send(err);
    res.send(clients);
  });
});

//=== get one client by id ============
router.get('/find/:client_id', function(req, res){
  Client.findById(req.params.client_id
    , function(err,client){
      if(err) res.send(err);
      res.send(client);
    });
});

//=== search for client ===============
router.get("/search", function(req, res){
  var term = new RegExp(req.body.search, "i");
  Client.find({
    $and: [
      {active: true},
      {$or: [
        {company : term},
        {website : term},
        {address:{state : term}},
        {address:{city : term}},
        {mainPoc:{firstName: term}},
        {mainPoc:{lastName: term}}
        //add otherPocs search
      ]}
    ]
  }, function(err, clients){
    if(err) res.send(err);
    res.send(clients);
  });
});

//=== add a new client ================
router.post("/new", function(req, res){
  Client.create(req.body.client, function(err, client){
    if(err) res.send(err);
    res.send(client);
  });
});

//=== updates a client ================
router.put("/update/:client_id", function(req, res){
  Client.findOneByIdAndUpdate(req.params.client_id
    , req.body.update
    , function(err, client){
      if(err) res.send(err);
      res.send(client);
    });
});

//=== remove a client (set is as not active) 
router.delete("/delete/:client_id", function(req, res){
  Client.findOneByIdAndUpdate(req.params.client_id
    , {active: false}
    , function(err, client){
      if(err) res.send(err);
      res.send(200);
    });
});


//export the routes for use in main app
module.exports=router;