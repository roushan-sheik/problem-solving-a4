// Create a function called calculateMoney( )
function calculateMoney(tickets) {
  if (typeof tickets !== "number" || tickets < 0) {
    return "Please provide total number of tickets.";
  } else {
    const ticketPrice = 120;
    let totalSelling = tickets * ticketPrice;
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
const result = calculateMoney(20);
console.log(result);
