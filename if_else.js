console.log("Hello")
let age = 19

if(age >= 18){
    console.log("You are eligible for driving license")
}
else{
    console.log("You are not eligible for driving license")
}

let score = 85

if(score >= 90){
    console.log("Grade A")
}
else if(score >= 70){
    console.log("Grade B")
}
else if(score >= 60){
    console.log("Grade C")
}
else{
    console.log("Fail")
}

// Nested statements

let agee = 22
let had_id = true

if(age >= 18){
    if(had_id){
        console.log("Access Granted")
    }
    else{
        console.log("Access denied")
    }
}
else{
    console.log("You are not eligible")
}


// Ternnary operator

let ageee = 45
let is_adult = ageee >= 18? true: false
console.log(is_adult)