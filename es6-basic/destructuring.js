let array=["adam","eve","bang",null]

let [name1,name2,name3,name4]=array;

console.log(name1,name2,name3,name4)

console.log("michael scott".split(' '))


let [firstName,lastName]="michael scott".split(' ')
console.log(firstName)
console.log(lastName)


//?empty values
let [fname,,title]=["Uma","Mahesh","Mr."]
console.log(title,fname)


//Objects
let user={
    someName:'michael',
    age:42,
    city:'Seattle'
}

let {someName,age,city}=user;
console.log(someName,age,city)


let props={skill:'C#',heroName:'Tuan'}
let {skill,heroName}=props  //by using this we dont have to repeat the code again and again
console.log(skill,heroName)

