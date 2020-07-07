const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)
      || (new Date(date)).toDateString() !== date.toDateString()){
    throw new Error('Unexpected');
  }
  let month = date.getMonth();
  if (month === 11 || month <= 1){
    return 'winter';
  } else if (month <= 4){
    return 'spring';
  } else if (month <= 7){
    return 'summer';
  } else if (month <= 10){
    return 'autumn';
  } 
  throw new Error('Unexpected');
};
