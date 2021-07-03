// var a=10;
// var b=a;
// a=20;
// console.log(a);
// console.log(b)


// var a=[1,2]
// var b=a;
// a.push(3)
// console.log(a)
// console.log(b)

// var x=[1,2,3]
// var y=x;
// x=[1,2,3,4]
// console.log(x)
// console.log(y)

// var name="uma"+1
// console.log(name,typeof name)

// var output=1+2+"uma"
// console.log(output,typeof output)

// var name=3+4+"uma"+1+2
// console.log(name,typeof name)

// var name=3+"4"+"uma"+1+2
// console.log(name,typeof name)

// var output1=(function(x){
//     delete x; //delete will not work on x because x is not an object
//     return x;
// })(0)

// console.log(output1)

// var x=1;
// var output1=(function(x){
//     delete x; //delete will not work on x because x is not an object
//     return x
// })()
//  console.log(output1)


// var x=1;
// var output1=(function(){
//     delete x; //delete will not work on x because x is not an object
//     return x
// })()
//  console.log(output1)



// var output1=(function(val){
//     delete val.x; //delete will not work on x because x is not an object
//     return val
// })({x:0})
//  console.log(output1)


// var output1=(function(val){
//     delete val.m; 
//     m=2;//delete will not work on x because x is not an object
//     return m
// })({m:0})
//  console.log(output1)



//?HOW TO EMPTY AN ARRAY
var array=['a','b','c','d']
// //1st way
// while(array.length){
//     array.pop()

// }
//  console.log(array)

//  //2nd way
// while(array.length){
//     array.shift()
// }
// console.log(array)

// //3rd way
// array=[]
// console.log(array)

//4th way
array.length=0;
console.log(array)

//5th way
array.splice(0,array.length)
console.log(array)

console.table(
    [
        {name:"sad",age:23},
        {name:"swdwdd",age:43},
        {name:"ererr",age:83},
        {city:"jiji"}
    ]
)

console.error('this is error')
console.warn('this is small warning')
console.info('this is for your info')
console.log("Hello %s your id is %i","uma",1234)
console.log("Hey %o",{name:"uma"})


console.log(evenOrOdd(3))
function evenOrOdd(val){
    // if(val%2==0){
    //     return true
    // }else{
    //     return false
    // }
    // return val%2==0?true:false;
    return val%2==0
}






