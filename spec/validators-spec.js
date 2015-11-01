var validators = require('../server/models/validation/validators'),
    tests      = require('./tests/db-tests');

var validatorTest = function(test){
  tests[test].forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(validators[test](item.test)).toBe(item.result);
    });
  });
};

describe("Database Validators", function(){
  for(var test in tests){
    validatorTest(test);
  };
});