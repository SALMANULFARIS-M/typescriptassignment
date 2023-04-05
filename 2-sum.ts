const read = require("readline-sync");
console.log("Enter two numbers");

let num1:number = parseFloat(read.question("enter the first number: "));
let num2:number = parseFloat(read.question("enter the second number: "));

console.log( `sum is: ${ num1+num2 }` );
