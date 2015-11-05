var Models  = require('../models/Models.js'),
    Controller = require('./db-controller'),
    defCtrl = new Controller('Order');

module.exports = {
  findActive: function(req, res){
      if(!req.query.name){
        Models.Order.findActive(function(err, docs){
          if(err) res.send(err);
          Models.Order.populate(docs, {path: 'customer'}, function(err, docs){
            if(err) res.send(err);
            Models.Order.populate(docs, {path: 'lineItems.supplier'}, function(err, docs){
              if(err) res.send(err);
              res.send(docs);
            });
          });
        });
      }
      else{
        Models[dbName].findByTerm(req.query.name, 
        function(err, docs){
          if(err) res.send(err);
          res.send(docs);
        });
      }
    },
  findOne : defCtrl.findOne,
  addOne : defCtrl.addOne,
  updateOne : defCtrl.updateOne,
  deleteOne : defCtrl.deleteOne
};