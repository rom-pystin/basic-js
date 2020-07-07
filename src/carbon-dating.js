const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = Number.parseFloat(sampleActivity);
  if (typeof(sampleActivity) !== "string" || isNaN(sample) 
    || sample <= 0 || sample > MODERN_ACTIVITY){
    return false;
  }
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD));
  return result;
};
