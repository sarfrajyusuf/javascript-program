//Steven wants you to improve his tip calculator,
// using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300,
// and if the value is different, the tip is 20%.

const bills = [125, 555, 44];
const calcTip = (bills) => {

    if (bills >= 50 && bills <= 300) {
        return bills * 15 / 100
    }
    else {
        return bills * 20 / 100
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


for (let i = 0; i < bills.length; i++) {
    for (let j = 0; j < tips.length; j++) {
        console.log(`bills: ${tips[j]}, ${bills[i] + tips[j]}`)
    }

}

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, "-----")
console.log(total)