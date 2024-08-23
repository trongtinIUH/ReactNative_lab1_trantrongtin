// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it
function calculateBMI(mass, height) {
    return mass / height ** 2;
}

function compareBMI(mass1, height1, mass2, height2) {
    let bmi1 = calculateBMI(mass1, height1);
    let bmi2 = calculateBMI(mass2, height2);
    if (bmi1 > bmi2) {
        return `Mark's BMI (${bmi1.toFixed(1)}) is higher than John's (${bmi2.toFixed(1)})!`;
    } else {
        return `John's BMI (${bmi2.toFixed(1)}) is higher than Mark's (${bmi1.toFixed(1)})!`;
    }
}

// Data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

console.log(`Data 1: ${compareBMI(markMass, markHeight, johnMass, johnHeight)}`);

// Data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

console.log(`Data 2: ${compareBMI(markMass, markHeight, johnMass, johnHeight)}`);