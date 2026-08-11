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

let info = [{name:"Aryan", class:"7th", age: 99, language:"JavaScript"}]
for(key in info){
    console.log("The key of aryan", key,"is",info[key])
}

obj = {name:"aryan", age:99, class:7,language:"JavaScript"}
for(key in obj){
    console.log("The value of aryan",key,"is",obj[key])
}

// O4. count object properties
const person ={
    name:"arayn",
    class:7,
    age:60,
    langaueg:"JS"
}


// O5. double every number

let double = [12,45,6,7,9]
const double_arr = (a) =>{
    return a*2
}

let new_array = double.map(double_arr)
console.log(new_array)

// O6. Add 10 to every number 

let me = []