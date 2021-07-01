//JAVASCRIPT OBJECT NOTATAION
var obj1={
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
console.log(obj1)
//the key difference is that the the key value
//is wrapped in DOUBLE quotes or we can say that they 
//are in the string notation

//json object can be an object but vice-versa is not true


var obj2={
    userId:1,
    id:1,
    title:"this is title",
    body:"this is body"
}
console.log(obj2)

var person={"firstName":"John" ,"lastName":"Nash"}

console.log(person,typeof person)

var personString=JSON.stringify(person)
console.log(personString,typeof personString)
//it converts into string
//stringify is used to serialize and deserialize
//serialize means converting that data into bytes



var personObject=JSON.parse(personString)
console.log(personObject,typeof personObject)
//it converts into object