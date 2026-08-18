const convertToCelsius = function(temp) {
  let conversionC = 5/9 * (temp - 32)
  let rounded = parseFloat(conversionC.toFixed(1))
  return rounded
};

const convertToFahrenheit = function(temp) {
  let conversionF = (9/5 * temp) + 32
  let rounded = parseFloat(conversionF.toFixed(1))
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
