const read = require("readline-sync");
let mark:number =parseFloat( read.question("enter your mark: "));

if (mark >= 50) {
    console.log("you are passed");
} else {
    console.log("you are failed");
}