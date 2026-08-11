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

// Methods in array

let array = [12,13,14,15,16,17,18]
array.push(20) // add new data to the array but at the end 
console.log(array)
array.pop() // remove the last element or data from the array
console.log(array)
array.reverse()
console.log(array) // reverse the array data or elements
array.shift()  // removes the first item of the array 
console.log(array)
array.unshift("Aryan")   // add items to the first place at 0 index 
console.log(array)


for(i = 0; i < array.length; i++){
    const value = array[i]
    console.log(value)
}

for (const key of array){
    console.log(key)
}

let dupe_array = [4,5,6,7,8]
const square = (a) =>{
    return a*a
}

let new_dupe = dupe_array.map(square)
console.log(new_dupe)

let score = [12,45,23,54,234,68,67,56,98,88]
const above_60 = (a) =>{
    if(a> 60){
        return true
    }
    else{
       return false
    }
}

let score_check = score.filter(above_60)
console.log(score_check)


let passed = score.filter(score => score >= 70)
console.log(passed)
