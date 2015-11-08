//===MODEL for orders============================

//===get required tools==========
var mongoose   = require('mongoose'),
    Schema     = mongoose.Schema,
    validators = require('../validation/validators');

//===set up schema for orders========
var productSchema = new Schema({
  active : {type: Boolean, default: true},
  name : String,
  number : String,
  supplier : {type: Schema.ObjectId, ref: 'Supplier'}, 
});

//=== add custom methods for customer schema
  require('../methods/model-methods.js')(productSchema);

//==export client model
module.exports=mongoose.model("Product", productSchema);