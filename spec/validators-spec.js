var validators = require('../server/models/validation/validators'),
    tests      = require('./tests/db-tests');

//test
describe("Database Validators", function(){
 
  tests.email.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(validators.email(item.test)).toBe(item.result);
    });
  });

  tests.zip.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(validators.zip(item.test)).toBe(item.result);
    });
  });

  tests.phone.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(validators.phone(item.test)).toBe(item.result);
    });
  });

  tests.customerType.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(validators.customerType(item.test)).toBe(item.result);
    });
  });

  tests.state.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(validators.state(item.test)).toBe(item.result);
    });
  });
});