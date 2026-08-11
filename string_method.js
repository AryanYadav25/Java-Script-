console.log("HEY GUYS , HOW YOU ALL DOING ")

const name = "Aryan"
const intro ="Good boy as always and good boy and good"

console.log(name.length)
console.log(intro.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())

const space = "  aryan   " // added space before and after aryan
console.log(space)
console.log(space.trim()) // remove the extra space 

const msg = "Hey Aryan this side hopefully you got your package"
console.log(msg)
console.log(msg.includes("package")) // it will give true, yes package word is in the msg variable

const str = "JavaScript"
console.log(str)
console.log(str.indexOf("a"))
console.log(str.lastIndexOf("a"))

const title = "Full_Stack"
console.log(title)
console.log(title.startsWith("Full_")) // true 
console.log(title.endsWith("Stack")) // true 

const word = "Aryan is very good boy"
console.log(word)
console.log(word.slice(0,5)) // it will give Aryan
console.log(word.slice(5)) // it will slice everthing from 0 to 5  

const given = "Aryan is very good boy"
console.log(given)
console.log(given.replace("good","helpful"))  // this will change the good word to helpful

// CONVERT STRING INTO ARRAY BY USING SEPERATOR

let data = "HTML,CSS,JAVASCRIPT"
let parts = data.split(",")
console.log(parts) // it will give ["HTML", "CSS","JAVASCRIPT"]


