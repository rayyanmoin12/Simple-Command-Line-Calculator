#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "number",
        name: "firstNumber",
        message: "Enter your first number"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter your second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Choose an operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid operation");
}
