const read = require('readline-sync')
const annualIncome: number = parseFloat(read.question("Enter your annual income:"));

// Compute income tax
let taxAmount: number = 0;
if (annualIncome <= 250000) {
    taxAmount = 0;
} else if (annualIncome <= 500000) {
    taxAmount = (5 / 100) * annualIncome;
}
else if (annualIncome <= 1000000) {
    taxAmount = (20 / 100) * annualIncome;
}
else if (annualIncome <= 5000000) {
    taxAmount = (30 / 100) * annualIncome;
}

// Output the result
console.log(`The income tax amount is ${taxAmount.toFixed(2)}`);
