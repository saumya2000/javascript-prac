//it means using {} we have to create the obj
var person ={}


person["firstName"]="alex"
person.lastName="parish"
person.age=17
person.address={}

person.address.city="paris"
person.address.state="paris"
person.address.country="france"


console.log(person)

var student={
    firstName:'who is',
    lastName:'Johngalt',
    age=12,
    address:{
        city:'Lucknow',
        state:'UP',
        pincode:112233,
        country:"India"
        },
        getFullName: function(){
            return this.firstName+' '+this.lastName
        },
        getFullName2: function(){
            return student.firstName+' '+student.lastName
        }
}

console.log(student)
console.log(student.getFullName())
console.log(student.getFullName2())


//ARRAY LITERAL SYNTAX
// var arr=[]