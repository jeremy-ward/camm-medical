//=== api routes for interaction with supplier database =====
//=== "api/supplier..."

//=== get required dependencies
var express     = require('express'),
    router      = express.Router(),
    Controller  = require("../controllers/db-controller"),
    supCtrl = new Controller('supplier');

//=== set up api routes =========================

  //GET Routes ========================
    //=== gets all supplier =
    router.get('/', supCtrl.findActive);

    //=== get one client by id
    router.get('/:supplier_id', supCtrl.findCustomer);
  

  //POST Routes =======================
    //=== add a new client ==
    router.post("/", supCtrl.addCustomer);


  //===PUT Routes======================
    //=== updates a client ==
    router.put("/:supplier_id", supCtrl.updateCustomer);


  //===DELETE Routes ==================
    //=== remove a supplier (set is as not active) 
    router.delete("/:supplier_id", supCtrl.deleteCustomer);

//export the routes for use in main app
module.exports=router;