var test = require('../server/models/validators');
var emails=[{
  test: "jeremy.ward@gmail.com",
  result: true
  },
  {
  test: "jerem@nond",
  result: false
  },
  {
  test: "jeremy.ward.1@mail.weber.edu",
  result: true
  },
  {
  test: "jerem%non.com",
  result: false
  },
];
var zipCodes=[
  {
    test: "84404",
    result: true
  },
  {
    test: "844",
    result: false
  },
  {
    test: "84404-1233",
    result: true
  },
  {
    test: "a12345",
    result: false
  },
  {
    test: "84404-123",
    result: false
  },
];
var phoneNumber=[
  {
    test: "801-866-2834",
    result: true
  },
  {
    test: "801-23-2834",
    result: false
  },
  {
    test:"8017860414",
    result: false
  }
];

//test
describe("Database Validators", function(){
  emails.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(test.email(item.test)).toBe(item.result);
    });
  });
  zipCodes.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(test.zip(item.test)).toBe(item.result);
    });
  });
  phoneNumber.forEach(function(item){
    var expResult = item.result?"valid":"invalid";
    var testStr = "should ensure " + item.test + " is " + expResult;
    it(testStr, function(){
      expect(test.phone(item.test)).toBe(item.result);
    });
  });
});