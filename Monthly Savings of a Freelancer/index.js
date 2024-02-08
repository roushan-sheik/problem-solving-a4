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
const result = monthlySavings([100, 2000, 2500], 5000);
console.log(result);
