"use strict";
let k = 1;
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += k++ + ' ';
    }
    console.log(row);
}
