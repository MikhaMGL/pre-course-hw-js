let passport = {
    name: "Petr",
    surname: "Petrov",
};
let passport2 = {...passport};
passport2.name  = "Ivan"
passport2.surname  = "Ivanov"


console.log(passport);
console.log(passport2)