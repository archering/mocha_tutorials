if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./require.module.a'],function(math){

    return {
        greet:"hello world",
        plus:function(a,b){
            return math.sum(a,b);
        },
        minus:function(a,b){
            return math.minus(a,b);
        }
    }

})