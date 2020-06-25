
const assert = require('chai').assert;
const requirejs = require("requirejs");
requirejs.config({
    nodeRequire: require
});

describe("测试 AMD模块化编程中 require.module.b.js",function(){

    let injector,math2;


    before(function(done){
        requirejs(["../src/require.module.b"],function(obj){
            math2 = obj;
            done();
        });
       
    });


    it("math2.plus(1,2) 应该返回3",function(){
        assert.equal(math2.plus(1,2),3);
        
    });


});