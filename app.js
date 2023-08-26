let num1 = null,
    num2 = null,
    operation = null;

function add (num1,num2) { return num1 + num2 };
function subtract (num1,num2) { return num1 - num2 };
function multiply (num1,num2) { return num1 * num2 };
function divide (num1,num2) { return num1 / num2 };

function operate (num1,num2,operator) {
    if (operator === "+") {return add(num1,num2) }
    else if (operator === "-") {return subtract(num1,num2) }
    else if (operator === "*") {return multiply(num1,num2) }
    else if (operator === "/") {return divide(num1,num2) }
}




console.log(operate(1,2,"+"));

const display = document.querySelector("#display");
console.log(display);
display.textContent = "";

const numbers = document.querySelectorAll('.number');
console.log(numbers);


numbers.forEach( element => element.addEventListener("click" , function () { updateDisplay(element.textContent) } ) )

function updateDisplay(element) {
   if(!num2) { display.textContent += element}
   else return;
}

const operators = document.querySelectorAll(".operator");


function operations (operator) {
    num1 = +(display.textContent);
    operation = operator;
    display.textContent = "";
    console.log(num1,operation);
}

operators.forEach(element => element.addEventListener('click' , function() { if(!num1) operations(element.textContent) 
    else return;
}))


const equal = document.querySelector("#equal");


function equalTo () {
    if (!num2) {
    num2 = +(display.textContent);
    display.textContent = operate(num1,num2,operation)}
    else return;
}

equal.addEventListener('click' , equalTo);

const clear = document.querySelector("#clear");

function clearAll () {
    num1 = null;
    num2 = null;
    operation = null;
    display.textContent = "";
}

clear.addEventListener('click' , clearAll);
