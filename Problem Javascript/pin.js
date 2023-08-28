function pin(num) {
    data = {
        1 : "pop",
        10 : "double rip",
        100 : "hide your mints",
        1000 : "fall"
    }
    const a = num.toString(2);
    const ar = a.split("").reverse().join("");
    m = []
    mf = []
    for(let i = 0; i < a.length; ++i) {
        m.push(parseInt(ar[i] * (10 ** i)));
        mf = m.filter(function(value, index) {
            return value !== 0;
        })
    }
    result = []
    for(let i = 0; i < mf.length; ++i) {
        if(mf[i] === 10000) {
            mf.pop();
            mf.reverse();
            result.push(data[mf[i]]);
            result.pop();
            result.reverse();
        }
        else {
            result.push(data[mf[i]]);
        }
    }
    return result;

}

console.log(pin(19));