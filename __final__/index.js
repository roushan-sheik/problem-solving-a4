/**
 * @param {Number} ticketSale
 * @returns Number
 */
// Create a function called calculateMoney( )
function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Please provide valid total number of tickets.";
  } else {
    const ticketPrice = 120;
    let totalSelling = ticketSale * ticketPrice;
    // calculate total cost
    const janitorCost = 500;
    // staff cost .
    const staffs = 8;
    let lunchCost = staffs * 50;
    // total cost
    let totalCost = janitorCost + lunchCost;
    // Subtract total cost from total selling
    let remainingMoney = totalSelling - totalCost;
    // Return the remaining money
    return remainingMoney;
  }
}
/**
 *  @param {String} babyName
 *  @returns String
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
/**
 * @param {Array} arr
 * @param {Number} livingCost
 * @returns Number
 */
// Create a function that takes 2 inputs payment array and living cost
function monthlySavings(arr, livingCost) {
  // Validation
  // if input is not array and number return error msg "invalid input";
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  const taxRate = 0.2;
  let remaininMoney = 0;
  // check the payment is greater then or equal 3000/ tax = 20%
  for (const payment of arr) {
    if (payment >= 3000) {
      let tax = payment * taxRate;
      let anualMoney = payment - tax;
      remaininMoney += anualMoney;
    } else {
      remaininMoney += payment;
    }
  }
  // if savings value less than 0 return a string "earn more"
  // if savings value greater than 0 return savings
  let savings = remaininMoney - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
 
