//=== api routes for interaction with customer database =====
//=== "api/customer..."

//=== get required dependencies
var express            = require('express'),
    router             = express.Router(),
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
    router.post("/", customerController.addCustomer);


  //===PUT Routes======================
    //=== updates a client ==
    router.put("/:customer_id", customerController.updateCustomer);


  //===DELETE Routes ==================
    //=== remove a customer (set is as not active) 
    router.delete("/:client_id", customerController.deleteCustomer);

//export the routes for use in main app
module.exports=router;