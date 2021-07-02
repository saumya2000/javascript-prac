//?PUSH POP SHIFT UNSHIFT
var array=[4,5,6]
array.push(7)  //added at last
array.unshift(3) //added at first
array.unshift(2)
array.unshift(1)
array.pop()  //remove from end
array.shift() //remove from start
console.log(array)



//?converting array to string
var array=[4,5,6]
var arrayString=array.join(',')
console.log(arrayString,typeof arrayString)

//?converting string to array
var name="scott"
var nameArray=name.split('')
console.log(nameArray)

var name="scott hihi dkskcd dcfdc"
var nameArray=name.split(',')
console.log(nameArray)