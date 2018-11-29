// O(2N)
const fn = (numbers) => {
  const product = numbers.reduce((acc, num) => {
    return acc * num;
  }, 1);
  return numbers.map((num) => product / num);
};

// O(N^2)
const withoutDivision = (numbers) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        num = num * numbers[j];
      }
    }
    result = result.concat(num);
  }
  return result;
};

// O(N^2)
const withoutDivisionFn = (numbers) => {
  return numbers.map((num, i, nums) => {
    return nums.reduce((acc, n, j) => {
      if (i !== j) {
        return acc * n;
      }
      return acc;
    }, 1);
  });
};

export {
  fn,
  withoutDivision,
  withoutDivisionFn,
};
