/*"Retirement Calculator"*/

const name = "Juliana"; //Type a name here.
const gender = "M"; //Type "M" for -Male- or type "F" for -Female-.
const age = 50; //Type an age here.
const contribution = 35; //Type the contribution time.

amount = age + contribution; //The baseline addopted is the amount of age and contribution time.

/*The requirements for positive answers will be valued about the gender informed and results of the amount, which the system will
rate the followed condition: 95 years old for -Male- and 85 years old for -Female-.

P.S: We consider assumed data for assessment basis, these datas are just for concluding this exercise of developing a program.*/

if (gender == "M") {
    if (amount >= 95) {
        console.log(`${name}, you can retire`);
    } else {
        console.log(`${name}, you can't retire yet!`);
    } 
} else if (gender != "M") {
    if (amount >= 85) {
        console.log(`${name}, you can retire`);
    } else {
        console.log(`${name}, you can't retire yet!`);
    }
}