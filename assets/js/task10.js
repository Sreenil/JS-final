function Difference(num) {
    const difference = Math.abs(num - 13);
  
    if (num > 13) {
      return difference * 2;
    } else {
      return difference;
    }
}
  
console.log(Difference(10));
console.log(Difference(15));