function howMany(num) {
    res = [];
    if (num < 1) {
        return 0;
    }
    while(num > 1) {
        if(num % 2 == 0) {
            num /= 2;
        }
        else {
            num = (num * 3) +1;
        }
        res.push(num);
    }
    return res.length;
}

console.log(howMany(20));