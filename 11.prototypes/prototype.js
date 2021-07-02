//we can extend the methods without touching the 
//original ...it is basically providing flexibility
//to extend the function 

function Student(firstName,lastName,city){
    this.firstName=firstName
    this.lastName=lastName
    this.city=city

    // this.fullName=function(){
    //     return this.firstName+' '+this.lastName
    // }
}

Student.prototype.getFullName=function(){
    return this.firstName+' '+this.lastName
}

// Student.prototype.city="boston"

var student1=new Student('Paul','Aldrin','Boston')
console.log(student1)
console.log(student1.getFullName())
console.log(student1.city)

var student2=new Student('Lily','Collins','LA')
console.log(student2)
console.log(student2.getFullName())
console.log(student2.city)

var student3=new Student('Anne','Frank','Seattle')
console.log(student3)
console.log(student3.getFullName())
console.log(student3.city)