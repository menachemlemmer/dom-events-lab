/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let currentNumber = "";
let previousNumber = "";
let currentOperator = "";
let calculated = false;

/*------------------------ Cached Element References ------------------------*/

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (calculated === true) {
      clear();
    }
    calculated = false;
    currentNumber += event.target.innerText;
    display(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    if (previousNumber === "") {
      currentOperator = event.target.innerText;
      previousNumber = currentNumber;
      currentNumber = "";
    } else if (calculated === false) {
      equal();
      calculated = false;
      currentOperator = event.target.innerText;
    } else {
      currentOperator = event.target.innerText;
    }
    calculated = false;
  });
});

equalBtn.addEventListener("click", equal);

clearBtn.addEventListener("click", clear);

/*-------------------------------- Functions --------------------------------*/

function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

function equal() {
  if (currentOperator === "/" && currentNumber == 0) {
    display("Can't do that, stupid!");
    setTimeout(clear, 2000);
    return;
  }
  result = operate(previousNumber, currentNumber, currentOperator);
  previousNumber = result;
  currentNumber = "";
  currentOperator = "";
  display(result);
  calculated = true;
}

function clear() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display("");
  calculated = false;
}

function display(number) {
  document.querySelector(".display").innerText = number;
}
