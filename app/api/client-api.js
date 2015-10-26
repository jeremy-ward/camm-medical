//=== api routes for interaction with client database =====
//=== "api/client..."

//=== get required dependencies
var express = require('express');
var router=express.Router();
var Client = require('../models/client-model.js');

//=== function to find all clients
function allClients(){
  Client.find(function(err, clients){
    if(err) return err;
    return clients;
  });
}

//=== set up api routes =========================

//=== get a clients ===================
router.get('/', function(req, res){
  res.send(allClients());
});

//=== add a new client ================
router.post("/new", function(req, res){
  Client.create(req.body.client, function(err, client){
    if(err) res.send(err);
    res.send(allClients());
  });
});


//export the routes for use in main app
module.exports=router;