console.log("Heyyyyyyy")
console.log("hahhahah")

// array in JS

let fruits = ["apple", "mango", "grapes", "banana", "kiwi"]
let marks = [ 12, 56, 11, 69, 34]

console.log(fruits[2]) // value of particular indexing  
console.log(fruits) // entire array 
console.log(marks)

let mix = [56 , 45 , "Aryan" , true , 45.3] // you can put different type of data into array
console.log(mix)

let arr = [12, 6, 23,["Aryan", 99]]  // You can put array inside array 
console.log(arr)

fruits[1] = "Pumpkin" // We can change the value inside the array 
console.log(fruits)

console.log(fruits.length) // 5

fruits.push("mango") // you can add data inside the array by using push and it will add at the last 
console.log(fruits)

// OBJECTS IN ARRAY 

let students = [{name:"Aryan", class:89, age:99, marks:100}, {name:"Dev", class:79, age:67, marks:67}, {name:"Sakshi", class:45, age:56, marks:87}, {}, {}]
console.log(students)
students[2].name = "Dimitri" // changing name 
console.log(typeof students[1])
console.log(students[1])
