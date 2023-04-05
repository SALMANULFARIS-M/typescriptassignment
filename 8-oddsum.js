"use strict";
const read = require("readline-sync");
let num = parseFloat(read.question("enter a number: "));
let i;
let j;
let sum = 0;
for (i = 0; i <= num; i++) {
    if (i % 2 == 1) {
        sum = sum + i;
    }
}
console.log(sum);
