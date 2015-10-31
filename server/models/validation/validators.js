//=== shared validation functions

var customerTypes = require('./customerTypes'),
    states        = require('./usStates');

module.exports={
  email : function(email){
    return /[\w\-\.]+\@\w+(\.\w+)+/i.test(email);
  },
  zip : function(zip){
    return /^(\d{5})(\-\d{4})?$/.test(zip);
  },
  phone : function(phone){
    return/^(\d{3}\-){2}\d{4}/.test(phone);
  },
  customerType : function(type){
    return (customerTypes.indexOf(type)!=-1);
  },
  state: function(state){
    return (states.hasOwnProperty(state));
  }
};