const read = require('readline-sync')
// Accept inputs from user
const P: number = parseFloat(read.question("Enter the principal amount:"));
const R: number = parseFloat(read.question("Enter the rate of interest:"));
const n: number = parseFloat(read.question("Enter the number of years:"));

// Calculate simple interest
const SI: number = (P * R * n) / 100;

// Display the result
console.log(`Simple Interest: ${SI.toFixed(2)}`);