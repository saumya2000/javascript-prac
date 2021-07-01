//IMMEDIATELY INVOKED FUNCTIONS

// (function(){
//     console.log('Hello')
// })()


(function(name,city){
    console.log('Hello my name is'+ name+' and I am from' +city)
})('Saumya','Jaipur')

var singleton=(function(){
    return "This is sing;eton and would create Object only once"
})()

console.log(singleton)



// function sample(){

// }

// var sample=function(){

// }

// var sample=(function(){

// })()