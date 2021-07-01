// var display=function sample(){   
    //we can define function with name
     //which is of no use
//     console.log('this is display method')
// }

display()
var display=function (){
    console.log('this is display method')
}

console.log(display)


sample()
function sample(){
    console.log('function sampls is invoked')
}

var callMe = function(message,name){
    return message+' '+name
}

console.log(callMe('Good Morning','Saumya'))

//a function assigned to a variable is called
//anonymous function