#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 3333;


let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your Pin code",
  type: "number",
});

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code!");
  let optionAnswer = await inquirer.prompt({
    name: "options",
    message: "Select an Option",
    type: "list",
    choices: ["Withdraw", "Check Balance", "Fast Cash"],
  });

  if (optionAnswer.options === "Withdraw") {
    let amountAnswer = await inquirer.prompt({
      name: "amount",
      message: "Enter Amount",
      type: "number",
    });
    if (amountAnswer.amount > myBalance) {
      console.log("Insufficient Balance!");
    } else
      (myBalance -= amountAnswer.amount),
        console.log(`Your remaining balance is ${myBalance}`);
  } 
  else if (optionAnswer.options === "Check Balance") {
    console.log(`Your balance is ${myBalance}.`);
  } 
  else if (optionAnswer.options === "Fast Cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastcashAmount",
        message: "Select an Amount",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);
    myBalance -= fastCashAns.fastcashAmount;
    console.log(`Your remaining balance is ${myBalance}.`);
  }
} else console.log("Incorrect Pin Code!");
