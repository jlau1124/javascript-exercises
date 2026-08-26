const fibonacci = function(n) {
  let currentValue = 1
  let nextValue = 1
  if (Number(n) === 1 || Number(n) === 2) {
    return 1
  } else if (Number(n) === 0) {
    return 0
  }
    else if (n < 0) {
    return "OOPS"
  } else {
    for (let i = 3; i <= Number(n); i++) {
      let nextNumber = currentValue + nextValue
      currentValue = nextValue
      nextValue = nextNumber
    }
  }
  return nextValue
};

// converting string to a #: https://stackoverflow.com/questions/1133770/how-can-i-convert-a-string-to-an-integer-in-javascript

// Do not edit below this line
module.exports = fibonacci;
