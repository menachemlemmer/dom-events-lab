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
    currentNumber += event.target.innerText;
    console.log(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    if (previousNumber === "") {
      currentOperator = event.target.innerText;
      previousNumber = currentNumber;
      currentNumber = "";
    } else {
      equal();
      currentOperator = event.target.innerText;
    }
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
  result = operate(previousNumber, currentNumber, currentOperator);
  clear();
  previousNumber = result;
  console.log(result);
}

function clear() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  calculated = false;
}
