/**
 * @param {Object} obj
 * @returns String
 */
// Create a  function that takes an object as an argument
function password(obj) {
  // convert the object to an array
  let tempArr = Object.values(obj);
  // specify the value
  let names = tempArr[0].toLowerCase();
  let birth = tempArr[1].toString();
  // birthYear validation
  if (birth.length < 4 || birth.length > 4) {
    return "invalid";
  }
  let site = tempArr[2].toLowerCase();
  // Make the password
  let pass = "";
  pass += site;
  pass += "#";
  pass += names;
  pass += "@";
  pass += birth;
  // Upper case the firs character of the password
  function makeUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const finalPass = makeUpper(pass);
  return finalPass;
}
// Testing =====================================
let obj = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
const result = password(obj);
console.log(result);
