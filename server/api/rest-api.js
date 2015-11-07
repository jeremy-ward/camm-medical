//=== api routes for interaction with supplier database =====
//=== "api/XXXX..."

//=== get required dependencies
module.exports=function(db){
var express     = require('express'),
    router      = express.Router(),
    Controller  = require("../controllers/db-controller"),
    dbCtrl      = new Controller(db);

//=== set up api routes =========================

  //GET Routes ========================
    //=== gets all  =
    router.get('/', dbCtrl.findActive);

    //=== get one  by id
    router.get('/:_id', dbCtrl.findOne);
  

  //POST Routes =======================
    //=== add a new one ==
    router.post("/", dbCtrl.addOne);


  //===PUT Routes======================
    //=== updates one ==
    router.put("/:_id", dbCtrl.updateOne);


  //===DELETE Routes ==================
    //=== remove a one (set is as not active, or hard deletes) 
    router.delete("/:_id", dbCtrl.deleteOne);

    return router;
}