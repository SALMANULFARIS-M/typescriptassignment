"use strict";
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [15, 25, 35, 45, 55];
let temp = [];
let limit = 5;
for (let i = 0; i < limit; i++) {
    temp[i] = arr1[i];
    arr1[i] = arr2[i];
    arr2[i] = temp[i];
}
console.log("first array" + arr1);
console.log("second array" + arr2);
