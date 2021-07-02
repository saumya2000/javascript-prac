//?CLASS

function Student(){

}



//?INSTANCE
var student1=new Student() //student1 is called an instance
var student2=new Student() //student2 is called an instance



//?CONSTRUCTOR
function Order(){
    console.log('Order is called')
}
var order1=new Order() //Order() is constructor



//?PROPERTIES
function Customer(gender){
    this.gender=gender
}

var customer1 = new Customer('Female')
console.log(customer1)

var customer2 = new Customer('Male')
console.log(customer2)

//we can differentiate between a normal function 
//and a const function by seeing the first letter 
//but it is not a written rule,just a practice



//?METHODS
function Person(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
    this.getFullName=function(){
        return this.firstName+' '+this.lastName
    }
}


//prototypes are also used to create inheritance
Person.prototype.getFirstName=function(){
 return "hello"+this.firstName
}


//static method
Person.getFirstName=function(lastName){
    return "how are you?" + lastName
}

var person1=new Person("baby","girl")
var output=person1.getFirstName()
console.log(output)

var getFirstName=Person.getFirstName('Kim');
console.log(getFirstName)



//any object created using literal syntax or 
//constructor syntax will contain __proto
var obj={}
console.log(obj)
function Display(){

}
var display=new Display()
console.log(display)


function Teacher(){
    this.name="John"
    this.gender="M"
}

var teacherObj= new Teacher()
console.log(Teacher.prototype)  //constructor 
console.log(teacherObj.prototype) //undefined
console.log(teacherObj.__proto__) //constructor
console.log(Teacher.__proto__)  //pointing to function

console.log(typeof Teacher.prototype)
console.log(teacherObj.__proto__)

console.log(Teacher.prototype===teacherObj.__proto__)