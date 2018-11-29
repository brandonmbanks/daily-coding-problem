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
