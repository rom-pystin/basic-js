const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catWorld) {
  let result = 0;
  for (let row of catWorld){
    for (let spot of row){
      if (spot === "^^"){
        result++;
      }
    }
  }
  return result;
};
