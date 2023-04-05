

let arr1:number[] = [11, 20, 34, 50, 33];
let limit = 5;
let result = arr1.reduce((val, num) => {
    if (num % 2 == 0) {
        val++;
    }
    return val;
}, 0);
console.log(result);


