const numbers = [1, 11, 5, 8, 65, 38, 14];

// ========== reduce example ==========

const reduce = (arr, callback, initialValue) => {
  let result = initialValue;

  for (const number of arr) {
    result = sum(number, result);
  }

  return result;
};

const sum = (a, b) => a + b;

console.log(reduce(numbers, sum, 0));
