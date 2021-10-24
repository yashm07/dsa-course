function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }  
  }
  return undefined;
} // Time complexity - O(n^2) - my rookie version solution
// Space complexity - O(1)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  
  return undefined;
} // Time complexity - O(n)
// Space complexity - O(n) since creating hash table

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);