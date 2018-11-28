// Problem 1
//
// Google
//
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//
// Bonus: Can you do this in one pass?

const twoNumSum = (numbers, k) => {
  const solveNums = {};
  if (numbers.length < 2) {
    return false;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (solveNums[numbers[i]]) {
      return true;
    }
    solveNums[k - numbers[i]] = true;
  }
  return false;
};

export {
  twoNumSum,
};
