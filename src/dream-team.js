const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)){
    return false;
  }

  let resultArray = [];
  for (let member of members){
    if (typeof(member) === "string" && member.trim().length > 0){
      resultArray.push(member.trim().toUpperCase()[0]);
    }
  }
  return resultArray.sort().join('');
};
