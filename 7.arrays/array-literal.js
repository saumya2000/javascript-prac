// var data=[]
// data[0]=1234
// data[1]="das"
// data[3]=true
// console.log(data)

var data=[
    1,
    "abcd",
    true,
    null,
    undefined,
    {name:"alex"},
    function(name){return name},
    ["red","green","blue"]
]

console.log(data)

console.log(data[6](data[5].name))
//we can add any type of data types in array in js