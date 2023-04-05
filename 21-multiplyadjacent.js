"use strict";
const read = require('readline-sync');
const inputArray = read.question("Enter the array (comma-separated)").split(",").map(Number);
// Multiply adjacent values and store in another array
const newarray = [];
for (let i = 0; i < inputArray.length - 1; i++) {
    newarray.push(inputArray[i] * inputArray[i + 1]);
}
// Output the result
console.log("Result:", newarray);
