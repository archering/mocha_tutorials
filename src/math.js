class Math{

    //加法
    sum(a,b){
        if(!a && !b){
            return 0;
        }
        return parseInt(a||0) + parseInt(b||0);
    }

    //减法
    minus(a,b){
        if(!a && !b){
            return 0; 
        }
        return parseInt(a||0) - parseInt(b||0);
    }

    //乘法
    multiple(a,b){

    }

    //次方
    pow(){

    }


}

module.exports = new Math();
