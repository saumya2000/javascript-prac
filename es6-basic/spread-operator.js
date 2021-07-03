//!Spread Operator : unpacks elements
//!rest operator: packs element into an array

//?spread operator consists of {...} dots

const odd=[1,3,5]
const combined=[2,4,6,...odd]

console.log(combined)

//?rest operator(...)
//!rest parameter must be last fromal parameter
function display(a,b,...params){
    console.log(params)
}
display(1,2,3,4,5,6,7)


//Constructing Array literal
let initialChars=['A','B']
let chars=[...initialChars,'C','D']
console.log(chars)


//Concatenating arrays 
let numbers=[1,2]
let mostNumbers=[3,4]
let allNumbers=[...numbers,...mostNumbers]
console.log(allNumbers)


//Copying an array
let scores=[80,70,90]
let copiedScores=[...scores]
console.log(copiedScores)


//spread operator and string
//*when we apply spread operator to the string below
//*it spreads out each individual character of the string
let characters=['A',...'BCfhjdmfgthy','D']
console.log(characters)

let characters2=['A',...'80','D']
console.log(characters2)