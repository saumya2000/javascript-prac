function Person(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
    // this.getFullName=function(){
    //     return this.firstName+' '+this.lastName
    // }
}

Person.prototype.getFullName=function(){
    return this.firstName+' '+this.lastName
}

function Student(age){
    this.age=age;
}

//Inherit the properties from Parent / SuparType
Student.prototype=new Person('alex','parish')

Student.prototype.getAge=function(){
    return this.age;
}
var student1=new Student(45)
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.age)
console.log(student1.getFullName())
console.log(student1.getAge())