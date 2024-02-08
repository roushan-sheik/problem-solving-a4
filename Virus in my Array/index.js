/**
 * @param {Array} array
 * @returns Array
 */
// Create a function that takes an array as an argument
function deleteInvalids(array) {
  // Validation
  if (!Array.isArray(array)) {
    return "Please provide an array.";
  }
  const newArr = [];
  // remove all the value without number
  const falsy = array.filter(Boolean);
  for (const item of falsy) {
    if (typeof item === "number") {
      newArr.push(item);
    }
  }
  // return new array
  return newArr;
}
const result = deleteInvalids([
  1,
  null,
  undefined,
  18,
  -19,
  NaN,
  "12",
  [1, 2],
  { ob: "lala" },
]);
console.log(result);
