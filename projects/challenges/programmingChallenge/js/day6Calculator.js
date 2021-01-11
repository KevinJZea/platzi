/* The challenge consists on creating a program
able to work as if it were a calculator. */

function Calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*" /* || "x" || "X" */:
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    case "x":
      return "If you want to multiply, you may use '*'.";
      break;

    case "X":
      return "If you want to multiply, you may use '*'.";
      break;

    default:
      return "Your operator is incorrect. Try again.";
      break;
  }
}

console.log(Calculator(2, "+", 2));
console.log(Calculator(4, "/", 2));
console.log(Calculator(8, "*", 4));
