//=== shared validation functions

module.exports={
  email : function(email){
    return /[\w\-\.]+\@\w+(\.\w+)+/i.test(email);
  },
  zip : function(zip){
    return /^(\d{5})(\-\d{4})?$/.test(zip);
  }
};