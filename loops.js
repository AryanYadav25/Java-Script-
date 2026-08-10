console.log("Hey Whatsup")

// for loop

for(i = 0; i < 5; i++){
    console.log(i) // this will print numbers from 0 to 4 
}

for(j = 1; j <= 10; j++){
    console.log(j)
}

// trying star loop 

for(i = 0; i < 5; i++){
    row = ""
    for(j = 0; j <= i; j++ ){
        row += "*"
    }
    console.log(row)
}

// WHILE LOOP

let k = 0
while(k <= 5){
    console.log(k)
    k++
}

// Do while loop

let num = 0
do{
    console.log(num)
    num++
}while(num < 5)

// for in loop

obj = {
    name:"Aryan",
    age: 99,
    language:"JavaScript"
}

for (key in obj){
    console.log("The vale of", key, "for aryan is", obj[key])
}