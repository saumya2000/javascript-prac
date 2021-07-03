let simple=`        this is a template literal
        hello
`
//backticks are used to do multi line strings
//also to take values dynamically
console.log(simple)


var msg='Multiple \n string'
console.log(msg)

let string=`template literal in ES6
I can write string in another line
I can write string in multi line
`
console.log(string)


//using single quotes
let anotherString=`here is a template literal`
console.log(anotherString)

//string contains a backtick
let strWithBackTick=`Template literal use backticks \` instead of quotes`
console.log(strWithBackTick)


//?VARIABLE SUBSTITUTIONS
let firstName='Adam',
    lastName='Scott'

    var output='hello Mr.'+firstName+lastName
    console.log(output)

let greeting =`Hello Mr. ${firstName} ${lastName} ` 
console.log(greeting)

// let msg=`hey this is you 100$ bill`
// console.log(msg)

let msg2=`hey this is you 100\$\{firstName\} bill`
console.log(msg2)



//? DEFAULT PARAMETERS
