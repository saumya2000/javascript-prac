var data=["harry","ron","hermoine"]

//1st way
for(var i=0;i<data.length;i++){
    console.log(i,data[i])
}

//2nd way
data.forEach(function(item,index){
    console.log(index,item)
})
//foreach expects a callback function


//3rd way
var mapData=data.map(function(item,index){
    // console.log(index,item)
    return index +' '+item
    t
})
console.log(mapData)
//foreach will not retunn anything but
//map will return arrays of values

//4th way
for(var i in data){
    console.log(i,data[i])
}

for(var item of data){
    console.log(item)
}
