function factorialIterative(value) {
  let total = 1;
  for (let i = 2; i <= value; i++) {
    total *= i;
  }
  // O(n) - loop n times 
  return total
}

function factorialRecursive(value) {
  if (value === 1 || value === 0) {
    return 1;
  } 
  // O(n) - call n times
  return value * factorialRecursive(value-1);
}

