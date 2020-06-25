const expect = require('chai').expect;
const str = require("../src/stringify");


describe("测试类stringify的成员函数count\r\n",function(){

   it("在字符串'sassaffsdasf'中查找s字符出现了几次,应该输出5次",()=>{

       expect(str.count("sassaffsdasf","s")).to.be.equal(5);

   }); 

});