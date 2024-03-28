#!/usr/bin/env node
import inquirer from "inquirer";

async function calculator() {
    let answers = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Please enter first Number: "
        },
        {
            type: "number",
            name: "num2",
            message: "Please enter Second Number: "
        },
        {
            type: "list",
            name: "operator",
            choices: ["*", "+", "-", "/"],
            message: "Please select operator: "
        },
    ]);

    let { num1, num2, operator } = answers;

    if (num1 !== undefined && num2 !== undefined && operator !== undefined) {
        let result = 0;

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return;
            }
        }

        console.log("Your answer is:", result);
    } else {
        console.log("Error: Insufficient inputs");
    }
}

calculator();
