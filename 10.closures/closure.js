// function greet(message){
//     return function wish(){
//             return function welcome(){
//                 return 1
//             }
//     }
// }

// var wishFunc=greet('Hi')


// var welcomeFunc = wishFunc()

// var welcome=welcomeFunc()

// console.log(welcome)


// //doing directly 
// var finalOutcome=greet('Hi')()()
// console.log(finalOutcome)

function greet(message){
    return function(name){
        return message+' '+name
    }
}

var sayHello=greet('Hello')
console.log(sayHello)

var wish = sayHello('alex')
console.log(wish)

//a child function is having the access to parents
//properties or variables and it is called closure 