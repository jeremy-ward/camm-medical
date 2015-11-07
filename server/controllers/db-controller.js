var Models = require('../models/Models.js'),
    popOpt = require('../models/population/options');

module.exports = function(dbName){

this.printDb = function(){
  console.log(dbName);
};

//===find all active 
this.findActive = function(req, res){
  if(!req.query.name){
    Models[dbName].findActive(function(err, docs){
      if(err) res.send(err);
      if(popOpt[dbName]){
        Models[dbName].populate(docs, popOpt[dbName], function(err,docs){
          if(err) res.send(err);
          res.send(docs);
        });
      }
      else{
        res.send(docs);}
    });
  }
  else{
    Models[dbName].findByTerm(req.query.name, 
    function(err, docs){
      if(err) res.send(err);
      res.send(docs);
    });
  }
};

//===find one by ID
this.findOne = function(req, res){
  Models[dbName].findById(req.params._id,
    function(err, doc){
      if(err) res.send(err);
      if(popOpt[dbName]){
        Models[dbName].populate(doc, popOpt[dbName], function(err,doc){
          if(err) res.send(err);
          res.send(doc);
        });
      }
      else{
        res.send(doc);}
    });
};

//===add a new one to database
this.addOne = function(req,res){
  Models[dbName].create(req.body.addNew, 
    function(err,doc){
      if(err) res.send(err);
      res.send(doc);
    });
};

//===update one's data
this.updateOne= function(req, res){
  Models[dbName].findByIdAndUpdate(req.params._id
    , req.body.updateData
    , {'new' : true}
    , function(err, doc){
        if(err) res.send(err);
        res.send(doc);
    });
};

//===Delete one by inactivating or hard delete
this.deleteOne = function(req, res){
  if(!req.query.hard){
    Models[dbName].findByIdAndUpdate(req.params._id
      , {active:false}
      , {'new':true}
      , function(err, doc){
          if(err) res.send(err);
          res.send(doc);
      });
  }
  else{
    Models[dbName].findByIdAndRemove(req.params._id
      , function(err, doc){
        if(err) res.send(err);
        res.send({"_id": doc._id, "deleted": true});
      }
    );
  }
};
};