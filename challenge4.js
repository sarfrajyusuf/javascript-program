const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const tips = [];
const totals = [];

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}

// console.log(totals, "totals");
// console.log(bills, "bills")
// console.log(tips, "tips")


//average bill
const averageBill = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(averageBill([7, 3, 2]), "avearge")
console.log(averageBill(tips), "tips avg")
console.log(averageBill(totals), "total avg")