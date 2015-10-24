//=== model for client data =============================

//===get the needed tools
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//===Set up the client schema
var clientSchema = new Schema({
  company: String,
  city: String,
  state: String,
  main_poc: {
    name: String,
    phone: Number,
    fax: Number,
    email: String,

  },
  other_pocs:[{

  }]
});

//==export client model
module.exports=mongoose.model("Client", clientSchema);