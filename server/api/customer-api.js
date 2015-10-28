//=== api routes for interaction with customer database =====
//=== "api/customer..."

//=== get required dependencies
var express     = require('express'),
    router      = express.Router(),
    Controller  = require("../controllers/db-controller"),
    custCtrl = new Controller('customer');

//=== set up api routes =========================

  //GET Routes ========================
    //=== gets all customer =
    router.get('/', custCtrl.findActive);

    //=== get one client by id
    router.get('/:customer_id', custCtrl.findCustomer);
  

  //POST Routes =======================
    //=== add a new client ==
    router.post("/", custCtrl.addCustomer);


  //===PUT Routes======================
    //=== updates a client ==
    router.put("/:customer_id", custCtrl.updateCustomer);


  //===DELETE Routes ==================
    //=== remove a customer (set is as not active) 
    router.delete("/:customer_id", custCtrl.deleteCustomer);

//export the routes for use in main app
module.exports=router;