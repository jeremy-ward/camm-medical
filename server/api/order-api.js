//=== api routes for interaction with supplier database =====
//=== "api/XXXX..."

//=== get required dependencies
var express     = require('express'),
    router      = express.Router(),
    orderCtrl   = require("../controllers/order-controller");

//=== set up api routes =========================

  //GET Routes ========================
    //=== gets all  =
    router.get('/', orderCtrl.findActive);

    //=== get one  by id
    router.get('/:_id', orderCtrl.findOne);
  

  //POST Routes =======================
    //=== add a new one ==
    router.post("/", orderCtrl.addOne);


  //===PUT Routes======================
    //=== updates one ==
    router.put("/:_id", orderCtrl.updateOne);


  //===DELETE Routes ==================
    //=== remove a one (set is as not active, or hard deletes) 
    router.delete("/:_id", orderCtrl.deleteOne);

    module.exports=router;