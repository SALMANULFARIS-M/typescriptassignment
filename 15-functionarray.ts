function getArray(): number[] {
    const arr: number[] = [];
    arr.push(10,20,30,40,50);
    return arr;
}

function displayArray(arr: number[]): void {
    console.log(`Array values: ${arr}`);
}

function main(): void {
    let arr: number[] = [];
    arr = getArray();
    displayArray(arr);
}

main();