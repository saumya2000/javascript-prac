// function add(x,y){
// return x+y
// }

// console.log(add(10,20))


// var add =function(x,y){
//     return x+y
// }
// var add=(x,y)=>{
//     return x+y
// }
// console.log(add(10,20))



let add=(x,y)=>x+y;
console.log(add(10,20))

let names=["sam","john","adam"]
let lengths=names.map(name=>name.length)
console.log(lengths)

let sayHello=()=>"Say Hello"
console.log(sayHello())


// //line breaks-invalid
// let multiply=(x,y)
// => x*y

// console.log(multiply)


//line break - valid
let multiply=(x,y) =>
 x*y

console.log(multiply(2,4))


//object literal
// let setColor=function(color){
//     return {value:color}
// }

// let backgroundColor=setColor('Green')
// console.log(backgroundColor.value)

// let setColor = color=>({
//     value:color
// })                               //use parantheses to avoid the error

// console.log(setColor('Red'))


// var employee={
//     id:1,
//     greet:function(){
//         console.log(this.id) //this will point to employee
//     }
// }

// employee.greet()

// var employee={
//     id:1,
//     greet:function(){
//         var self=this;
//         setTimeout(function(){
//             console.log(self.id)  //this will be global here
//         },1000)
        
//     }
// }

// employee.greet()

// var employee={
//     id:1,
//     greet:function(){
       
//         setTimeout(function(){
//             console.log(this.id)
//         }.bind(this),1000)
//     }
// }

// employee.greet()


var employee={
    id:1,
    greet:function(){
        
        setTimeout(()=>{
            console.log(this)  //fat arrow will take the context from parent
            console.log(this.id)
        },1000)
       
    }
}

employee.greet()