function SumOrTriple(a, b) {
    let sum = a + b;
    
    if(a === b)
    {
        return sum * 3;
    } else {
        return sum;
    }
}

console.log(SumOrTriple(2, 5));
console.log(SumOrTriple(5, 5));