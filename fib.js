function fibs(n){
    let fibArray = [0,1];
    let num1 = 0;
    let num2 = 1;
    let addedNumber = 1;
    for (let i = 2; i < n; i++) {
        addedNumber = num1 + num2;
        num1 = num2;
        num2 = addedNumber;
        fibArray.push(addedNumber);  
    }
    return fibArray;
}

console.log(fibs(8));

function fibsRec(n){
    if(n < 2) return n;
    return fibsRec(n-1) + fibsRec(n-2);
}

console.log(fibsRec(8));