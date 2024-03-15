function PositiveOrNegative(num1, num2) {
    if ((num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0)) {
        return true;
    } else {
        return false;
    }
}

const num1 = 2;
const num2 = 8;

if (PositiveOrNegative(num1, num2)) {
    console.log("One number is positive and the other is negative.");
} else {
    console.log("Both numbers are either positive or negative.");
}
