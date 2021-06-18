const numbers = [1, 11, 5, 8, 38, 14];

// ========== reduce example ==========

const reduce = (arr, callback /*, initialValue*/) => {
  let result = arr[0]; /* || initialValue */

  for (let i = 1; i < arr.length; i++) {
    result = callback(arr[i], result);
  }

  return result;
};

const sum = (a, b) => a + b;
const multpl = (a, b) => a * b;

console.log(reduce(numbers, sum /*, 0 */));
console.log(reduce(numbers, multpl));
console.log(reduce(numbers, (acc, value) => acc * value));

//======== Array Swap by Array Destructuring ========

let firstDigit = 2;
let secondDigit = 6;

console.log("---- ---- ----");
console.log("firstDigit:", firstDigit, "--", "secondDigit:", secondDigit);
[firstDigit, secondDigit] = [secondDigit, firstDigit];

console.log("---- ----");

console.log("firstDigit:", firstDigit, "--", "secondDigit:", secondDigit);
console.log("---- ---- ----");
