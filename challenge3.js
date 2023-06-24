/***
 * Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations!
 Remember: BMI = mass / (height * height) (mass in kg and height in meters).
 */
let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}
const res = john.mass / john.height ** 2

// const res2 = john.mass * (john.height * john.height)
mark.calBmi();

if (res > mark.bmi) {
    console.log(`John Smith's BMI ${res} is higher than Mark Miller's ${mark.bmi}!`)
}
else {
    console.log(`John Smith's BMI ${res} is lower than Mark Miller's ${mark.bmi}!`)
}