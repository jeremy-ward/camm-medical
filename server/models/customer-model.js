//=== model for customer data =============================

//===get the needed tools
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//=== set up the contact schema
var contactSchema = new Schema({
  firstname: String,
  lastname: String,
  salutation: String,
  phone: Number,
  alt_phone: Number,
  fax: Number,
  email: String,
  alt_email: String,
  primary: Boolean
});

//===Set up the customer schema
var customerSchema = new Schema({
  active: Boolean,
  company: String,
  type: String,
  website: String,
  address:{
    address: String,
    ste: String,
    city: String,
    state: String,
    zip: Number
  },
  mailingAddress:{
    address: String,
    ste: String,
    PO_box: Number,
    city: String,
    state: String,
    zip: Number
  },
  dateAdded: {type: Date, default: Date.now},
  firstOrder: Date,
  lastOrder: Date,
  numOrders: Number,
  contacts: [contactSchema]
});

//=== add custom methods for customer schema
  require('./model-methods.js')(customerSchema);

//==export client model
module.exports=mongoose.model("Customer", customerSchema);