"use strict";
let my_string = "Hello, world!";
try {
    let reversed_string = my_string.split("").reverse().join("");
    console.log(`Reversed string is: ${reversed_string}`);
}
catch (err) {
    console.log(err);
}
finally {
    console.log(`Type of my_string is: ${typeof my_string}`);
}
