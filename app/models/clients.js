//=== model for client data =============================

//===get the needed tools
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//===Set up the client schema
var clientSchema = new Schema({
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
  dateAdded: Date,
  firstOrder: Date,
  lastOrder: Date,
  mainPoc: {
    firstname: String,
    lastname: String,
    salutation: String,
    phone: Number,
    alt_phone: Number,
    fax: Number,
    email: String,
    alt_email: String
  },
  otherPocs:[{
    firstname: String,
    lastname: String,
    salutation: String,
    phone: Number,
    alt_phone: Number,
    fax: Number,
    email: String,
    alt_email: String
  }]
});

//==export client model
module.exports=mongoose.model("Client", clientSchema);