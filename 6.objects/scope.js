// var person={
//     firstName:'scott',
//     lastName:'halpert',
//     city:'paris'
// }

// person.age=45;
// person.firstName='Scotty'
// delete person.city;

// console.log(person)

//Object.preventExtension()
//? we can't add the properties
//?we can edit the properties
//?we can delete the properties


var preventObject={
    name:'baby',
    city:'jalandhar',
    age:25
}

Object.preventExtensions(preventObject)

preventObject.country="USA" //add
preventObject.name="babita" //edit
delete preventObject.age; //delete

console.log(preventObject)



//Object.seal()
//? we can't add the properties
//?we can edit the properties
//?we can't delete the properties
var sealObject={
    name:'baby',
    city:'jalandhar',
    age:25
}

Object.seal(sealObject)

sealObject.country="USA" //add
sealObject.name="babita" //edit
delete sealObject.age; //delete

console.log(sealObject)



//Object.freeze()
//? we can't add the properties
//?we can't edit the properties
//?we can't delete the properties
//!catch: inner objects needs to
//!be freezed
var freezeObject={
    name:'baby',
    city:'jalandhar',
    age:25,
    address:{
        state:'Telngana',
        street:'1st main'
    }
}

Object.freeze(freezeObject)

freezeObject.country="USA" //add
freezeObject.name="babita" //edit
delete freezeObject.age; //delete

Object.freeze(freezeObject.address)
freezeObject.address.state="Rajasthan"
console.log(freezeObject)