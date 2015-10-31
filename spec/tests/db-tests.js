module.exports={
email:[{
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
],
zip:[
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
],
phone:[
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
],
customerType:[
  {
    test: 'hospital',
    result: true
  },
  {
    test: 'restaurant',
    result: false
  }
],
state:[
  {
    test: "UT",
    result: true
  },{
    test: "NV",
    result: true
  },
  {
    test: "TX",
    result: true
  },
  {
    test: "XO",
    result: false
  },
  {
    test: "ZZ",
    result: false
  },
]
};