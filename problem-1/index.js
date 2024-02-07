/**
 * @param {*} ticketSale
 * @returns number
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
const result = calculateMoney(10);
console.log(result);
