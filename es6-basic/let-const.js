//FUNCTION SCOPED
// function sample(){
//     var firstName="blue"
//     console.log(firstName)
// }

// console.log(firstName) //refernce error

//BLOCKED SCOPE
// ?let and const is block scoped
//?var is func scoped
// if(true){
//     var foo="hello"
//     let bar="how are you"
//     const baz="i am done"

//     console.log(foo)
//     console.log(bar)
//     console.log(baz)
// }

// console.log(foo)
// console.log(bar)
// console.log(baz)

// for(var i=0;i<3;i++){
//     console.log(i)
// }
// console.log(i)

// for(let i=0;i<3;i++){
//     console.log(i)
// }
// console.log(i)

// let value=1;
//     value=10
// let value=100; //cant use let keyword again for value
// console.log(value)


const data=30;
data =20;

//?reassignment of value is not possible in const 
//?but is possible in let