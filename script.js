function makeChange(amount) {
  // Define the values of each coin
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize variables to count the number of each coin
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of each coin
  while (amount > 0) {
    if (amount >= quarterValue) {
      quarters++;
      amount -= quarterValue;
    } else if (amount >= dimeValue) {
      dimes++;
      amount -= dimeValue;
    } else if (amount >= nickelValue) {
      nickels++;
      amount -= nickelValue;
    } else {
      pennies++;
      amount -= pennyValue;
    }
  }

  // Create and return the result object
  const result = { q: quarters, d: dimes, n: nickels, p: pennies };
  return result;
}

// Examples
console.log(makeChange(47)); // Output: { "q": 1, "d": 2, "n": 0, "p": 2 }
console.log(makeChange(24)); // Output: { "q": 0, "d": 2, "n": 0, "p": 4 }
