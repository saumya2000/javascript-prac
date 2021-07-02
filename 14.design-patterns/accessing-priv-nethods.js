//accessing private methods
var Module=(function(){

   
    var privateMethod=function(message){
        console.log(message)
    }
    var publicMethod=function(text){
        console.log(text)
    }
    return {
        publicMethod:publicMethod
    }

})()

Module.publicMethod('Helllo')