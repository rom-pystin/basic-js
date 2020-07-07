const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  if (options.repeatTimes === undefined){
    options.repeatTimes = 0;
  }
  if (options.separator === undefined){
    options.separator = '+';
  }
  if (options.addition === undefined){
    options.addition = '';
  }
  if (options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 0;
  }
  if (options.additionSeparator === undefined){
    options.additionSeparator = '|';
  }
  
  if (options.additionRepeatTimes > 0){
    let extraPart = new Array(options.additionRepeatTimes);
    str += extraPart.fill('' + options.addition).join(options.additionSeparator);
  } else {
    str += options.addition;
  }

  if (options.repeatTimes > 0){
    let repeats = new Array(options.repeatTimes);
    str = repeats.fill('' + str).join(options.separator);
  }

  return str;
};
  