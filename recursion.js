function power(n, e) {
  if (e == 0) return 1;
  else return n * power(n, e - 1);
}

function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n-1);
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1


console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120