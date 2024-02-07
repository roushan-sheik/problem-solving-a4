/**
 *  @param {string} babyName
 *  @returns string
 */
// Create a checkName() function that checks the valid name
function checkName(name) {
  if (typeof name !== "string" || name.trim().length === 0) {
    return "invalid";
  }
  const lastGoodChar = ["a", "y", "i", "e", "o", "u", "w"];
  // Convert the name to Lowercase
  let babyName = name.toLowerCase();
  // last character
  let lastChar = babyName[babyName.length - 1];
  //condition
  if (lastGoodChar.includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
const result = checkName("Arifaj");
console.log(result);
