
const assert = require('chai').assert;
const requirejs = require("requirejs");
const Injector = require('requirejs-mock').provide(requirejs);
requirejs.config({
    nodeRequire: require
});

describe("测试 AMD模块化编程中 require.module.a.js",function(){

    let injector,math;

    // before(function(){

    //     injector = Injector.create();

    // });

    // after(function(){
    //     injector.destroy();
    // });

    before(function(done){
        injector = Injector.create();
        requirejs(["../src/require.module.a"],function(obj){
            math = obj;
            done();
        });
       
    });

    afterEach(function(){
        injector.destroy();
    });

    it("math.sum(1,2) 应该返回3",function(){
        assert.equal(math.sum(1,2),3);
        
    });


});