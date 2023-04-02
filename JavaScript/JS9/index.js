// Conditionals: Ternary Operators

// syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken noodle soup";
// let soup;

// let response = soup ? "Yes we have soup!" : "Sorry no soup today!";
// console.log(response);

let isCustomerBanned = false;
let soupAccess = isCustomerBanned
    ? "Sorry, no soup for you!"
    : soup
    ? `Yes we have ${soup} today`
    : "Sorry, no soup today!";
console.log(soupAccess);

