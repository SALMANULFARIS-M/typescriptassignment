const read = require("readline-sync");

const number:number = parseFloat(read.question("Enter a number : "));
let count:number =0;
for (let i =2; i <= number; i++) {
   if (number%i == 0) {
    count++
   }
}
if (count == 1) {
    console.log("Is a prime number");
}else{
    console.log("Is not a prime number");
}

