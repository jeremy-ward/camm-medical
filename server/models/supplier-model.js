//=== model for supplier data =============================

//===get the needed tools
var mongoose   = require('mongoose'),
    Schema     = mongoose.Schema,
    validators = require('./validation/validators.js');


//=== set up the contact schema
var contactSchema = new Schema({
  firstname: String,
  lastname: String,
  salutation: String,
  phone: Number,
  alt_phone: Number,
  fax: Number,
  email: {type: String, validate: {validator: validators.email, message: "invalid email"}},
  alt_email: String,
  primary: Boolean
});

//===Set up the supplier schema
var supplierSchema = new Schema({
  active: Boolean,
  company: String,
  type: String,
  website: String,
  address:{
    address: String,
    ste: String,
    city: String,
    state: String,
    zip: {type: String, validate:{validator:validators.zip}}
  },
  mailingAddress:{
    address: String,
    ste: String,
    PO_box: Number,
    city: String,
    state: String,
    zip: {type: String, validate:{validator:validators.zip}}
  },
  dateAdded: {type: Date, default: Date.now},
  firstOrder: Date,
  lastOrder: Date,
  numOrders: Number,
  contacts: [contactSchema]
});

//=== add custom methods for supplier schema
  require('./methods/model-methods.js')(supplierSchema);

//==export client model
module.exports=mongoose.model("Supplier", supplierSchema);