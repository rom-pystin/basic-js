const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;

    if (arr instanceof Array) {
      result = 1;

      let maxWithin = 0;
      for (let elem of arr) {
        let depthWithin = this.calculateDepth(elem);
        maxWithin = maxWithin >= depthWithin ? maxWithin : depthWithin;
      }
      result += maxWithin;
    }
    return result;
  }
};
