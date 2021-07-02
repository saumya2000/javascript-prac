var person1={firstName:'alex',lastName:'parish'}
var person2={firstName:'adam',lastName:'scott'}
var person3={firstName:'eve',lastName:'aldrin'}

function getMessage(message,city){
    return message+' '+
        city+' '+
        this.firstName+' '
        +this.lastName
}

var sayHelloUsingCall=getMessage.call(person2,'good morning','mumbai')
console.log(sayHelloUsingCall)