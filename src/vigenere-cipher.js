const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Invalid arguments");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let normalizedKey = key
      .repeat(Math.ceil(message.length / key.length))
      .substr(0, message.length);

    let result = "";
    let keyPosition = 0;
    for (let i = 0; i < message.length; i++) {
      let ascii = message.charCodeAt(i);

      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
        ascii = message.charCodeAt(i) - (65 - normalizedKey.charCodeAt(keyPosition));

        if (ascii > 90) {
          ascii -= 26;
        }
        keyPosition++;
      }

      result += String.fromCharCode(ascii);
    }
    if (!this.isDirect){
      result = result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Invalid arguments");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let normalizedKey = key
      .repeat(Math.ceil(message.length / key.length))
      .substr(0, message.length);

      let result = "";
      let keyPosition = 0;
      for (let i = 0; i < message.length; i++) {
        let ascii = message.charCodeAt(i);
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
          ascii = message.charCodeAt(i) + (65 - normalizedKey.charCodeAt(keyPosition));

          if (ascii < 65) {
            ascii += 26;
          }
          keyPosition++;
        }
  
        result += String.fromCharCode(ascii);
      }
      if (!this.isDirect){
        result = result.split('').reverse().join('');
      }
      return result;
  }
}

module.exports = VigenereCipheringMachine;
