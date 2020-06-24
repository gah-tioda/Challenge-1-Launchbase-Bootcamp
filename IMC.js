/*BMI Calculator*/

const name = "Gabriel"; //Type a name here.
const weight = 86.0; //Type a weight here.
const height = 1.90; //Type a height here.

bmi = weight / (height*height);

if (bmi>=30){
    console.log(`${name} your BMI is ${bmi} and you're above the ideal weight.`);
} else if (imc<=29.9) {
    console.log(`${name} your BMI is ${bmi} and you aren't above the ideal weight.`);
}