#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets start calculation...");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.gray `
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "operator",
        message: chalk.green("which operation you want to perform..?"),
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    },
    {
        type: "number",
        name: "Number1",
        message: "Enter no:1"
    },
    {
        type: "number",
        name: "Number2",
        message: "Enter no:2"
    },
]);
const { Number1, Number2, operator } = answers;
if (Number1 && Number2 && operator) {
    let result = 0;
    if (operator === "Addition") {
        result = Number1 + Number2;
    }
    else if (operator === "Substraction") {
        result = Number1 - Number2;
    }
    else if (operator === "Multiplication") {
        result = Number1 * Number2;
    }
    else if (operator === "Division") {
        result = Number1 / Number2;
    }
    console.log(chalk.blue("Your Output: ", result));
}
else {
    console.log(chalk.red("Enter valid Input.."));
}
async function startAgain() {
    do {
        await void ([]);
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.blue("Do you want to continue? Press y or n: ")
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
    return (welcome);
}
startAgain();
