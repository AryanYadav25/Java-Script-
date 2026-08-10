console.log("Hey Buddy, Whats' up doing good?")

// break statement end the loop doesn't matter wheather loop is complete or not 

for(i = 0; i < 6; i++){
    console.log(i)
    if(i == 4){
        break;
    }
}

console.log("----------------------------------")

for(j = 0; j < 10; j++){
    if(j == 6){
        continue  // skip this iteration and continue with the next value.. in this case value 6 is skippped and started from 7 again 
        // 0 1 2 3 4 5 7 8 9  value 6 is skipped 
    }
    console.log(j) 
}

console.log("-------------------------------------")

for(k = 0; k <= 20; k++){
    if(k%2 == 0){
        continue // skip even numbers
    }
    console.log(k)
}