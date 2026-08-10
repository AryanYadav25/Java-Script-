console.log("Hey Welcome here buddy")

console.log("Obejct is a combination of key value pairs")
console.log("Stores information in compact ways")

obj = {
    Name: "Aryan",
    Age: 99,
    Language: "JavaScript",
    Salary: 10000000000000,
    is_Admin: true,
    Father_Name: "Aryan2"
}
console.log(obj)

console.log(obj.Name) // prints the value of name key which is Aryan
console.log(obj.Language) // prints the value of Language key which is javascript
console.log(obj.is_Admin = true) // can change value in object 
delete obj.Age // delete age value from object

// Nested Objects

let student = {
    name: "dev",
    address: {
        state: "Uttrakhand",
        pin_code: 1121212
    }
}

console.log(student.address.state)