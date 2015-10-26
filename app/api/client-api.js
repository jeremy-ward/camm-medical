//=== api routes for interaction with client database =====
//=== "api/client..."

//=== get required dependencies
var express = require('express');
var router=express.Router();
var Client = require('../models/client-model.js');

//=== set up api routes =========================

//=== get all clients ===================
router.get('/', function(req, res){
  Client.find(function(err, clients){
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

//=== remove a client =================
router.delete("/delete/:client_id", function(req, res){
  Client.remove({
    _id: req.params.client_id
    }, function(err, client){
      if(err) res.send(err);
      res.send(200);
    });
});


//export the routes for use in main app
module.exports=router;