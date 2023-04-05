const read = require("readline-sync");
let userInput:string = read.question("enter your name: ");
console.log("you name is ".concat(userInput));