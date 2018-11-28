// Problem 1
//
// Google
//
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//
// Bonus: Can you do this in one pass?

// O(N^2)
const withBruteForce = (numbers, k) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        if (k === numbers[i] + numbers[j]) {
          return true;
        }
      }
    }
  }
  return false;
};

// Fulfill bonus
// O(N)
const withAnObject = (numbers, k) => {
  const solutions = {};
  for (let i = 0; i < numbers.length; i++) {
    if (solutions[numbers[i]]) {
      return true;
    }
    solutions[k - numbers[i]] = true;
  }
  return false;
};

// O(N)
const withASet = (numbers, k) => {
  const solutions = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (solutions.has(numbers[i])) {
      return true;
    }
    solutions.add(k - numbers[i]);
  }
  return false;
};

export {
  withBruteForce,
  withAnObject,
  withASet,
};
