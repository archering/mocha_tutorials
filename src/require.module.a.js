if (typeof define !== 'function') { var define = require('amdefine')(module) }
define([],function(){
    function Math(){

        this.sum = function(a,b){
            if(!a && !b){
                return 0;
            }
            return parseInt(a||0) + parseInt(b||0);
        }

        this.minus = function(a,b){
            if(!a && !b){
                return 0; 
            }
            return parseInt(a||0) - parseInt(b||0);
        }

    }

    return new Math();
});