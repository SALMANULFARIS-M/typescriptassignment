"use strict";
const read = require("readline-sync");
let num = parseFloat(read.question("enter a number for multiply: "));
const result = [];
for (let i = 1; i <= 10; i++) {
    result.push(num * i);
}
for (let i = 0; i < 10; i++) {
    console.log(`${i + 1} x ${num} = ${result[i]} `);
}
