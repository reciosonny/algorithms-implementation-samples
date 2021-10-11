
var memo = {};

var fib = function(n) {
    
    // if (memo[n]) return memo[n];
    if (n <= 1) return n;
    
    
    // return memo = fib(n-1) + fib (n-2);
    return fib(n-1) + fib (n-2);
};