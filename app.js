/*-------------------------------- Constants --------------------------------*/

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");

/*-------------------------------- Variables --------------------------------*/

let currentNumber;
let previousNumber;
let currentOperator;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    previousNumber = currentNumber;
    currentNumber = Number(event.target.innerText);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    currentOperator = event.target.innerText;
  });
});

equalBtn.addEventListener("click", (event) => {
  result = operate(previousNumber, currentNumber, currentOperator);
  console.log(result);
});
/*-------------------------------- Functions --------------------------------*/

function operate(num1, num2, operator) {
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
``;
