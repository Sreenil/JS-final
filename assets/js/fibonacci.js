function fibonacciSequence() {
    
    const sequence = [];
    
    let a = 0;
    let b = 1;
    
    for(let i = 0; i < numTerms; i++) {
        sequence.push(a);
        
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return sequence;
}

const numTerms = 8;
const result = fibonacciSequence(numTerms);
console.log(result);