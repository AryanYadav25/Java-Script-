console.log("Hey guuuuuyyyyyyyysysssssss")

// Q1. print every element of array 
let arr = [10,20,30,40,50,60]

for(i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// Q2. print only even numbers in array

let array = [12, 7, 5, 18, 21, 30, 9];
for(j = 0; j < array.length; j++){
    if(array[j]%2 == 0){
        console.log(array[j])
    }
}

// Q3. print all keys using loop

const info = {
    name:"aryan",
    age:"65",
    language:"JS",
}
for(let key in info){
    console.log(key)
}

// let info = [{name:"Aryan", class:"7th", age: 99, language:"JavaScript"}]
// for(key in info){
//     console.log("The key of aryan", key,"is",info[key])
// }

// obj = {name:"aryan", age:99, class:7,language:"JavaScript"}
// for(key in obj){
//     console.log("The value of aryan",key,"is",obj[key])
// }

// O4. count object properties
const person ={
    name:"arayn",
    class:7,
    age:60,
    langaueg:"JS"
}

let count = 0
for(let key in person){
    count++
}
console.log(count)


// O5. double every number

let double = [12,45,6,7,9]
const double_arr = (a) =>{
    return a*2
}

let new_array = double.map(double_arr)
console.log(new_array)

// O6. Add 10 to every number 

let me = [0,1,2,3,4,5,6,7,8,9,10]
const add_10 = (a) =>{
    return a+10
}

let me_10 = me.map(add_10)
console.log(me_10)

// O7. get only even numbers 

// let numb = [1,2,3,4,5,6,7,8,9,10]
// const numb_even = (a) =>{
//     if(numb[a]%2 == 0){
//         console.log(numb[a])
//     }
// }

// let num_even = numb.filter(numb_even)

// O8. get number greater than 50 

let gr8 = [20, 75, 43, 90, 12, 65, 31]
const gt50 = gr8.filter(a => a > 50)
console.log(gt50)

// O9. get names longer than 5 characters

const name =["aryan","mayank","adarsh","manvi","vanshika"]
const great_5 = name.filter(a => a.length > 5)
console.log(great_5)

// O10. find adults in loop of obj

let adults = [{name:"Aryan", age:24},{name:"Vanshika", age:23},{name:"dev",age:15}]
const is_adult = adults.filter(a => a.age > 18)
const is_name = adults.map(a => a.name)
console.log(is_adult)
console.log(is_name)

// O11. get names of adult 

