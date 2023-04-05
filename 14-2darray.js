
const read = require("readline-sync");
function addTwoArrays(arr1, arr2) {
    const numRows = arr1.length;
    const numCols = arr1[0].length;
    const sumArr = [];
    for (let i = 0; i < numRows; i++) {
        sumArr.push([]);
        for (let j = 0; j < numCols; j++) {
            sumArr[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return sumArr;
}

function inputArrayValues(numRows, numCols) {
    const arr = [];
    console.log("Enter the values of the array:");
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            row.push(parseInt(read.question(`Enter value for row ${i+1}, column ${j+1}:`)));
        }
        arr.push(row);
    }
    return arr;
}

function displayArray(arr) {
    console.log("Sum of 2 arrays is:");
    const numRows = arr.length;
    const numCols = arr[0].length;
    for (let i = 0; i < numRows; i++) {
        let rowStr = "";
        for (let j = 0; j < numCols; j++) {
            rowStr += arr[i][j] + " ";
        }
        console.log(rowStr.trim());
    }
}

console.log("Enter the size of arrays:");
const numRows = parseInt(read.question("Enter number of rows:"));
const numCols = parseInt(read.question("Enter number of columns:"));

console.log("Enter the values of array 1:");
const arr1 = inputArrayValues(numRows, numCols);

console.log("Enter the values of array 2:");
const arr2 = inputArrayValues(numRows, numCols);

const sumArr = addTwoArrays(arr1, arr2);

displayArray(sumArr);
