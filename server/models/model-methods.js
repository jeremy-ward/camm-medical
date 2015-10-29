//=== common custom methods for models

module.exports=function(schema){
  //=== find active ===============
  schema.statics.findActive = function(cb){
    return this.find({active: true}, cb);
  };

  //=== find by search term =======
  schema.statics.findByTerm = function(searchTerm, cb){
    var term = new RegExp(searchTerm, "i");
    return this.find({
      $and: [
        {active: true},
        {$or: [
          {company : term},
          {website : term},
          {address:{state : term}},
          {address:{city : term}},
          {mainPoc:{firstName: term}},
          {mainPoc:{lastName: term}}
          //add otherPocs search
        ]}
    ]}, cb);
  };
  
};
