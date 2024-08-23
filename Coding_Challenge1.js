// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter)

function calculateBMI(mass, height) {
    return mass / height ** 2;
}

function compareBMI(mass1, height1, mass2, height2) {
    let bmi1 = calculateBMI(mass1, height1);
    let bmi2 = calculateBMI(mass2, height2);
    return bmi1 > bmi2;
}

// Define the variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

console.log(`Data 2: Is Mark's BMI higher than John's? ${compareBMI(markMass, markHeight, johnMass, johnHeight)}`);