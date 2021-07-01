function Student(firstName,lastName){
    this.fname=firstName
    this.lname=lastName
}

var studentObj1 = new Student('scott','partick')
console.log(studentObj1)

var studentObj2 = new Student('adam','france')
console.log(studentObj2)

var studentObj3 = new Student('eve','venice')
console.log(studentObj3)

// var emptyObject={}
// var person = {name:'alex' ,city:'paris'}