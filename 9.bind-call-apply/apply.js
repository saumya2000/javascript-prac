var person1={firstName:'alex',lastName:'parish'}
var person2={firstName:'adam',lastName:'scott'}
var person3={firstName:'eve',lastName:'aldrin'}

function getMessage(message,city){
    return message+' '+
        city+' '+
        this.firstName+' '
        +this.lastName
}

var sayHelloUsingApply=getMessage.apply(person3,['good morning','delhi'])
console.log(sayHelloUsingApply)