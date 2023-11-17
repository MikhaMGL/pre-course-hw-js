let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportMarried2 = {...passportMarried,  married: true, address: {...passportMarried.address}} 
passportMarried2.married = true

passportMarried2.address.city = "Bobryisk"

console.log(passportMarried); 
console.log(passportMarried2);


// let passportWithAddress2 = {...passportWithAddress, address: {...passportWithAddress.address}}
// // passportWithAddress2.name = "Ivan"
// // passportWithAddress2.address.city = "Bobryisk"

// console.log(passportWithAddress.address.city);
// console.log(passportWithAddress2.address.city);
