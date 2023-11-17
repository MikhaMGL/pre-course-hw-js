let passport = {
    name: "Petr",
    surname: "Petrov",
};
let passport2 = {...passport};
passport.name  = "Ivan"
passport.surname  = "Ivanov"


console.log(passport);
console.log(passport2)