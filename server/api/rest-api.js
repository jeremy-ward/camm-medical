//=== api routes for interaction with supplier database =====
//=== "api/supplier..."

//=== get required dependencies
module.exports=function(db){
var express     = require('express'),
    router      = express.Router(),
    Controller  = require("../controllers/db-controller"),
    dbCtrl      = new Controller(db);

//=== set up api routes =========================

  //GET Routes ========================
    //=== gets all supplier =
    router.get('/', dbCtrl.findActive);

    //=== get one client by id
    router.get('/:_id', dbCtrl.findCustomer);
  

  //POST Routes =======================
    //=== add a new client ==
    router.post("/", dbCtrl.addCustomer);


  //===PUT Routes======================
    //=== updates a client ==
    router.put("/:_id", dbCtrl.updateCustomer);


  //===DELETE Routes ==================
    //=== remove a supplier (set is as not active) 
    router.delete("/:_id", dbCtrl.deleteCustomer);

    return router;
}