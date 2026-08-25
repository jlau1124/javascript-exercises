const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let sumOfArray = 0
	for (const num of arr) {
    sumOfArray += num
  }
  return sumOfArray
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
};

// props to Geeks4Geeks for the multiply one: https://www.geeksforgeeks.org/javascript/multiply-the-elements-of-an-array-in-javascript/

const power = function(base, exponent) {
	return base ** exponent 
};

const factorial = function(n) {
	let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res
};

// again props to Geeks for factorial one as well: https://www.geeksforgeeks.org/javascript/factorial-of-a-number-using-javascript/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
