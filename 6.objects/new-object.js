var person =new Object()
console.log(person)

person["firstName"]="Scott"
person["lastName"]="Deastnick"

var city="myCity";

person[city]="Delhi"

console.log(person["firstName"])

person.state="Delhi"

person.address = new Object()

person.address.street="1st main"
person["address"]["country"]="India"

console.log(person)

// console.log(person)

// var x=[1,2,3]
// var y=x;
// x.push(4)

// console.log(x)
// console.log(y)
