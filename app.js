let num1 = null,
    num2 = null,
    operation = null;
let state = false;
let storedValue = null;
let storedOperation;
const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#displayText");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector('#clear');
console.log(clear);

function clearAll () {
    num1 = null; num2 = null; operation = null; state = false;
    display.textContent = "Calculator";
    storedValue = null;

}

// OPERACIONES //
function add (num1,num2) { return num1 + num2 };
function subtract (num1,num2) { return num1 - num2 };
function multiply (num1,num2) { return num1 * num2 };
function divide (num1,num2) { return num1 / num2 };

// USAR OPERACIONES //
function operate (num1,num2,operator) {
    if (operator === "+") {return add(num1,num2) }
    else if (operator === "-") {return subtract(num1,num2) }
    else if (operator === "*") {return multiply(num1,num2) }
    else if (operator === "/") {return divide(num1,num2) }
}




console.log(numbers);


display.textContent = "Calculator"


console.log(display);

console.log(operators);

// BOTONES DE OPERACIONES EN USO //

function makeOperation (element) {
    const first = num1;
    if (!first &&  first !== 0) { num1 = +(display.textContent); 

        state = false; 

    operation = element.target.textContent;
    console.log(num1,num2,operation);
}
    else if ((first || first === 0) && operation === null  ) {
        state = false;
        operation = element.target.textContent;
        storedValue = null;

    }

    else if ((first || first === 0 ) && operation) {
        state = false; 
      num2 = +(display.textContent)
    num1 = operate(num1,num2,operation)
        display.textContent = num1
        num2 = null;
        operation = element.target.textContent;
        console.log(num1,num2,operation);
}
}




operators.forEach( element => {
    element.addEventListener("click" , makeOperation)
} )



function changeDisplay (element) {
    if(display.textContent.length > 10 && state === true) {return}
    else {
    if (state === false ) { state = true ; display.textContent = "" }
    display.textContent += element.target.textContent; }
}

numbers.forEach(element => {
    element.addEventListener('click' , changeDisplay);
})

clear.addEventListener('click' , clearAll);


const equal = document.querySelector("#equal");
function equalTo () {

    
    if (!num1) {return}
    else if(storedValue === null) {
        num2 = +(display.textContent)
        num1 = operate(num1,num2,operation)
        display.textContent = num1
        storedValue = num2;
        num2 = null;
        console.log(storedValue);
        storedOperation = operation;
        operation = null;
        state = false;
    }
    else {
        num1 = operate(num1,storedValue,storedOperation)
        display.textContent = num1
        state = false;
        operation = null;
        // console.log(storedValue);
    }


}

equal.addEventListener('click' , equalTo);