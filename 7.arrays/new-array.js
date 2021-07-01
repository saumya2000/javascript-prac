var colors = new Array(3)
colors[0]="red"
colors[1]="green"
colors[2]="blue"
colors[3]="pink"

console.log(colors)

console.log(colors.length)

var fruits=new Array("apples","banana","orange","papaya")
console.log(fruits)

var vegetables=new Array("potato","onion","tomato","beans")
console.log(vegetables)
 
var mixOfBoth1 = fruits.concat(vegetables)
console.log(mixOfBoth1)

var mixOfBoth2 = vegetables.concat(fruits)
console.log(mixOfBoth2)


var names= new Array('Hermoine','Harry Potter','Ron Weasley')
// names.concat('Draco Malfoy')
var concat = names.concat(['draco'])
console.log(concat)
console.log(names)