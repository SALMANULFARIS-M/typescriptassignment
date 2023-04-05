const read = require("readline-sync");
let num: number = parseFloat(read.question("enter a number: "));

let i:number;
let j:number;
let sum:number=0;
for (i = 0;i <= num; i++) {
    if (i%2==1) {
        sum =sum+i;
    }
}
console.log(sum);
