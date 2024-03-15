function sumOfEven(arr) {
    return arr.reduce((acc , num) => num % 2 ===0 ? acc + num : acc, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
console.log(sumOfEven(numbers));