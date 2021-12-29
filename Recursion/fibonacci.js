// very inefficient, time complexity O(2^n)
function fibonacci(n) {
  // calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

// implement dynamic programming since most calculations are repetitive
// time complexity O(n) since every calculation is unique, space complexity increase due to cache
function fibonacciDynamic() {
  let cache = {};

  // taking advantage of closures
  return function fibo(n) {
    // check if exists in cache
    if (n in cache) {
      return cache[n];
    } 
    // usual code 
    else {
      if (n < 2) {
        return n;
      } else {
        // store in cache since it is a unique value
        cache[n] = fibo(n-1) + fibo(n-2);
        // classic recursion call
        return cache[n];
      }
    }
  }
}