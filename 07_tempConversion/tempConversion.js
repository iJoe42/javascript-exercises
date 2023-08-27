const convertToCelsius = function(tempFahr) {
  // convert F to C
  let tempC = (tempFahr - 32) * 5 / 9;

  // round to 1 decimal
  return Math.round(tempC*10)/10;

};

const convertToFahrenheit = function(tempCels) {
  let tempF = (tempCels * 9 / 5) + 32;

  return Math.round(tempF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
