let passport = {
    name: "Petr",
    surname: "Petrov",
};
let passport2 = {...passport};
passport.name  = "Ivan"


console.log(passport);
console.log(passport2)