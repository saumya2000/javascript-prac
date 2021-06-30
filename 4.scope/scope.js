// var a=1;

// function sample(){
//     var a=2 //create private variable using var
//     // a=3 //if we use without var it will become global by default
// }

// sample()

// console.log(a)

// function b(){
//     var x;
//     console.log(x)
// }

// function a(){
//     var x=2;
//     b()
//     console.log(x)
// }

// var x=1;
// a();
// console.log(x)

function b(){
    console.log(myVar)
}

function a(){
    var myVar=2;
    b()
}

var myVar=1;
a();

console.log(1)
setTimeout(function(){
    console.log(2)
},3000)

console.log(3)

