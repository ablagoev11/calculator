let arg1, arg2;
let operation;
let display;

function add(arg1, arg2) {
  return arg1 + arg2;
}

function subtract(arg1, arg2) {
  return arg1 - arg2;
}

function multiply(arg1, arg2) {
  return arg1 * arg2;
}

function divide(arg1, arg2) {
  return arg1 / arg2;
}

function action(operation, arg1, arg2) {
  switch (operation) {
    case "+":
      return add(arg1, arg2);
      break;
    case "-":
      return subtract(arg1, arg2);
      break;
    case "x":
      return multiply(arg1, arg2);
      break;
    case "/":
      return divide(arg1, arg2);
      break;
    default:
      return "NO ACTION";
  }
}
