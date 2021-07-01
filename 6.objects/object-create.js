// var obj={}
// var person1=Object.create(obj)

// var person2=Object.create(null)

// var person3=Object.create({})

// var person4=Object.create(new Object())
// var person5=Object.create(Object.create(null))

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)
// console.log(person5)


var person=Object.create({})

person["firstName"]="alex"
person.lastName="parish"
person.age=17
person.address={}

person.address.city="paris"
person.address.state="paris"
person.address.country="france"


console.log(person)