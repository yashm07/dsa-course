const reverse = str => {
  // check input
  if (!str || str.length < 2 || typeof str != "string") {
    return "Not correct!";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

// using js methods to clean up code
const reverse2 = str => [...str].reverse().join("");
