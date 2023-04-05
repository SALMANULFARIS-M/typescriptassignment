const read = require("readline-sync");

class Calculator {
  public addition(num1: number, num2: number): number {
    return num1 + num2;
  }

  public subtraction(num1: number, num2: number): number {
    return num1 - num2;
  }

  public multiplication(num1: number, num2: number): number {
    return num1 * num2;
  }

  public division(num1: number, num2: number): number | string {
    if (num2 == 0) {
      return "Error: Division by zero";
    } else {
      return num1 / num2;
    }
  }
}

const calculator = new Calculator();

while (true) {
  console.log(
    "Please select operation -\n" +
    "1. Add\n" +
    "2. Subtract\n" +
    "3. Multiply\n" +
    "4. Divide\n" +
    "5. Exit\n"
  );

  const choice = read.question("ENTER THE NUMBER ACCORDING TO OPERATION: ");

  if (choice === "5") {
    break;
  }

  const num1 = parseFloat(read.question("Enter first number: "));
  const num2 = parseFloat(read.question("Enter second number: "));

  switch (choice) {
    case "1":
      console.log(`${num1} + ${num2} = ${calculator.addition(num1, num2)}`);
      break;
    case "2":
      console.log(`${num1} - ${num2} = ${calculator.subtraction(num1, num2)}`);
      break;
    case "3":
      console.log(
        `${num1} * ${num2} = ${calculator.multiplication(num1, num2)}`
      );
      break;
    case "4":
      console.log(`${num1} / ${num2} = ${calculator.division(num1, num2)}`);
      break;
    default:
      console.log("Invalid Input");
      break;
  }
}
