let arg1 = null,
  arg2 = null;
let operator = null;
let currentFloat = false;
let isConcatable = false;
let isEqual = false;
const display = document.querySelector("h1");
const actionDisplay = document.querySelector("h3");
const buttons = document.querySelectorAll("button");
const operatorEnum = {
  sum: "+",
  divide: "/",
  multiply: "*",
  subtract: "-",
};

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    const target = e.target;
    switch (target.id) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        if (display.textContent === "0") display.textContent = "";
        if (isConcatable) display.textContent += target.id;
        else {
          isConcatable = true;
          if (isEqual) clear();
          display.textContent = target.id;
        }
        break;
      case "subtract":
      case "sum":
      case "multiply":
      case "divide":
        if (arg1 === null) {
          arg1 = parseInt(display.textContent);
        } else if (arg2 === null) {
          arg2 = parseInt(display.textContent);
          arg1 = action(operator, arg1, arg2);
          display.textContent = arg1;
          arg2 = null;
        } else {
          display.textContent = arg1;
          isEqual = false;
        }
        actionDisplay.textContent = `${arg1} ${target.textContent}`;
        isConcatable = false;
        operator = target.id;
        break;
      case "clear":
        clear();
        break;
      case "equal":
        if (arg1 !== null && operator !== null) {
          if (!arg2) arg2 = parseInt(display.textContent);
          actionDisplay.textContent = `${arg1} ${operatorEnum[operator]} ${arg2} =`;
          arg1 = action(operator, arg1, arg2);
          display.textContent = arg1;
          isConcatable = false;
          isEqual = true;
        }
        break;
    }
  });
});

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
    case "sum":
      return add(arg1, arg2);
      break;
    case "subtract":
      return subtract(arg1, arg2);
      break;
    case "multiply":
      return multiply(arg1, arg2);
      break;
    case "divide":
      return divide(arg1, arg2);
      break;
    default:
      return "NO ACTION";
  }
}

function clear() {
  arg1 = null;
  arg2 = null;
  operator = null;
  isEqual = false;
  display.textContent = "0";
  actionDisplay.textContent = "";
}
