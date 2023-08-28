function perfect(num) {
    fact = []
    for(let i = 1; i < num; ++i) {
        if(num % i == 0) {
            fact.push(i);
        }
    }
    const sum = fact.reduce(function(a, b) {
        return a + b;
    })
    if(sum === num) {
        return "Perfect";
    }
    else if(sum > num) {
        return "Abundant";
    }
    else {
        return "Deficient";
    }
}

console.log(perfect(6));
console.log(perfect(12));
console.log(perfect(8));