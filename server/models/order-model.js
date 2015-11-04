//===MODEL for orders============================

//===get required tools==========
var mongoose   = require('mongoose'),
    Schema     = mongoose.Schema,
    validators = require('./validation/validators');

//===set up schema for orders========
var orderSchema = new Schema({
  active: {type: Boolean, default: true},
  customer: String,  //change to objectID,
  orderDate: {type: Date, default: Date.now()},
  shipDate: Date,
  invoiceDate: [Date],
  dueDate: Date,
  terms: String,
  paidDate: Date,
  lineItems:[
    {
      product: String,  //change to objectID
      supplier: String,  //change to objectID
      units: Number,
      unitPrice: Number,
      totalPrice: Number
    }
  ],
  //soldBy: ObjectID,
});

//=== add custom methods for customer schema
  require('./methods/model-methods.js')(orderSchema);

//==export client model
module.exports=mongoose.model("Orders", orderSchema);