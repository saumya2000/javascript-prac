// ?Deals with code encapsulation

var Module=(function(){
//private method
    var privateMethod=function(){
        console.log('private method is called')
    }
    var publicMethod=function(){
        console.log('public method is called')
    }

    var variable="alex"
    return{
        publicMethod:publicMethod,
        priMethod:privateMethod,
        paris:variable
    }
})()

Module.publicMethod()
Module.priMethod()
console.log(Module.paris)