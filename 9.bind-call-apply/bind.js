var person1={firstName:'alex',lastName:'parish'}
var person2={firstName:'adam',lastName:'scott'}
var person3={firstName:'eve',lastName:'aldrin'}

function getMessage(message,city){
    return message+' '+
        city+' '+
        this.firstName+' '
        +this.lastName
}

var sayHelloToPerson1=getMessage.bind(person1)
console.log(sayHelloToPerson1('good morning','jaipur'))

var sayHelloToPerson2=getMessage.bind(person2)
console.log(sayHelloToPerson2('good morning','jaipur'))

var sayHelloToPerson3=getMessage.bind(person3)
console.log(sayHelloToPerson3('good morning','jaipur'))

//2nd way
var sayHello=getMessage.bind(person2)('hello from','pune')
console.log(sayHello)




//when we want to invoke the function the we can use
//call or apply depending on whether we are passing 
//array or just comma sepearted values
//otherwise when we just want to return the function 
//definition then we will use bind