// function say(message){
//     console.log(message)
// }

// say() //undefined

//?ES5 FIX
function say(message){
    message=typeof message!=="undefined"?message:'HI'
    console.log(message)
}
say()



//?ES6 FIX
function say(message='hi'){
    // message=typeof message!=="undefined"?message:'HI'
    console.log(message)
}
say()


