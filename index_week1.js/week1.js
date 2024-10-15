const ps = require("prompt-sync");
const prompt = ps();

const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the Second number: "));

const sum = num1 + num2;
const sub = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;

console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
console.log('The sub of ' + num1 + ' and ' + num2 + ' is: ' + sub);
console.log('The multi of ' + num1 + ' and ' + num2 + ' is: ' + multi);
console.log('The Div of ' + num1 + ' and ' + num2 + ' is: ' + div);
