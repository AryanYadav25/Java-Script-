console.log("Hey guys whats' up")

// making functions 
// hahahhahahah

// a = 12
// b = 45
// sum = a + b
// average = sum/2
// average_plus_one = average + 1

// console.log(average)
// console.log(average_plus_one)


function greet(){
    console.log("Hey hahahhahaah")
}

console.log("--------------------------------")

function average(a,b){

    sum = a + b
    avg = sum/2
    avg_plus_one = avg + 1
    console.log(avg)
    console.log(avg_plus_one)
}

console.log("-------------------------------")


function add(a,b){
    return a + b 
}

let result = add(5,7)
console.log(result)

console.log("----------------------------------")



const multi = function(a,b){
    return a * b
}


console.log("------------------------------------")



const addd = (a,b) => {   // Arrow function 
    return  a + b
}

console.log(multi(5,4))
console.log(addd(4,5))

average(12,12) // calling function here to execute the program
greet()