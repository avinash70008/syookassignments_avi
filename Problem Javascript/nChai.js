function nChai(n, k, g, b) {
    var gr = "Green";
    var bl = "Black";
    var inc = 0;
    result = [];
    if(g > b) {

        var t = g;
        g = b;
        b = t;
        
        var c = gr;
        gr = bl;
        bl = c;
        
        if(b > (g + 1) * k) {
            return [];
        }
        
        for(let i = 0; i < n; ++i) {
            if(b > g && inc < k) {
                result.push(bl);
                b--;
                inc++;
            }
            else {
                result.push(gr);
                g--;
                inc = 0;
            }
        }
    }
    return result;
}

console.log(nChai(5, 1, 3, 2));
console.log(nChai(4, 3, 4, 0));