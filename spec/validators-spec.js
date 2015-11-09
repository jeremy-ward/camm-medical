var validators = require('../server/database/validation/validators'),
    tests      = require('./tests/validators-test');

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