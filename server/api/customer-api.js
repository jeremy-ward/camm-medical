//=== api routes for interaction with customer database =====
//=== "api/customer..."

//=== get required dependencies
var express            = require('express'),
    Router             = express.Router(),
    customerController = require("../controllers/customer-controller");


//=== set up api routes =========================

  //GET Routes ========================
    //=== gets all customer =
router.get('/', customerController.findActive);

    //=== search for client =
router.get("/search", customerController.findByTerm);

    //=== get one client by id
router.get('/:customer_id', customerController.findCustomer);
  
  
  //POST Routes =======================
    //=== add a new client ==
router.post("/", function(req, res){
  Client.create(req.body.client, function(err, client){
    if(err) res.send(err);
    res.send(client);
  });
});

//=== updates a client ================
router.put("/:client_id", function(req, res){
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