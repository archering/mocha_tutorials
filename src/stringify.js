class Stringify{

    //查找某个字符在，字符串str中出现了几次
    count(str,key){
        if(!str){
            return new Error("please input the source");
        }else if(!key){
            return new Error("please input the key");
        }

        return (str.match(new RegExp(key,"g"))||[]).length;
    }

    //查找key 在字符串str中的位置，并返回序号
    find(str,key){

    }

    //将字符串key 插入字符串str的index位置并返回
    insert(str,index,key){

    }

    //删除str第index位置的字符并返回
    rm(str,index){

    }

}

module.exports = new Stringify;