const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error();
  }

  const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  let result = [];
  let copy = arr.slice(0);
  for (let i = 0; i < copy.length; i++){
    if (!commands.includes(copy[i])){
      result.push(copy[i]);
    } else if (copy[i] === '--discard-next'){
      if (i < copy.length - 1 && !commands.includes(copy[i + 1])){
        copy.splice(i + 1, 1);
      }
    } else if (copy[i] === '--discard-prev'){
      if (i > 0 && !commands.includes(copy[i - 1])){
        result.pop();
      }
    } else if (copy[i] === '--double-next'){
      if (i < copy.length - 1 && !commands.includes(copy[i + 1])){
        result.push(copy[i + 1]);
      }
    } else if (copy[i] === '--double-prev'){
      if (i > 0 && !commands.includes(copy[i - 1])){
        result.push(copy[i - 1]);
      }
    }
  }

  return result;
};
