const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    this.chain.push(value !== undefined ? '( ' + value + ' )' : '( )');
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chain.length){
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
