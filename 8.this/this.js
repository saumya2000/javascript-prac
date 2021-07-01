// 'use strict' //used to define the scope properly and the variables are declared properly
console.log(this) //global here
console.log(window)

// var a=10

function sample(){
    var a=20
    console.log(this)
}

sample()

// console.log(a)

var obj={
    name:"harry",
    log:function(){
        // var self=this
        console.log(this)
        this.name="ron"
        console.log(this)
        //return 1

        var setName=function(){
            this.name="hermoine"
            console.log(this)
        }
        setName()
    }
}
obj.log()
// console.log(obj.log())

// var a=10
// if(a=10){
//     var variable=20
//     let value=30 //let is block scoped
// }

// console.log(variable)
// console.log(value)

