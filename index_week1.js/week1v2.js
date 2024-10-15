const ps = require("prompt-sync");
const prompt = ps();
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));
console.log("Choose an operation:");
console.log("1: Add");
console.log("2: Subtract");
console.log("3: Multiply");
console.log("4: Divide");
const choice = parseInt(prompt("Enter the number of the operation you want to perform : "));
if (choice === 1) {
    const sum = num1 + num2;
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
} else if (choice === 2) {
    const sub = num1 - num2;
    console.log('The difference of ' + num1 + ' and ' + num2 + ' is: ' + sub);
}
else if (choice === 3) {
    const multi = num1 * num2;
    console.log('The product of ' + num1 + ' and ' + num2 + ' is: ' + multi);
} else if (choice === 4) {
    const div = num1 / num2;
    console.log('The division of ' + num1 + ' by ' + num2 + ' is: ' + div);
} 
