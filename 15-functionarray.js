"use strict";
function getArray() {
    const arr = [];
    arr.push(10, 20, 30, 40, 50);
    return arr;
}
function displayArray(arr) {
    console.log(`Array values: ${arr}`);
}
function main() {
    let arr = [];
    arr = getArray();
    displayArray(arr);
}
main();
