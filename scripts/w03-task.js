/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

function addNumbers () {
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);

document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

function add (number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

function  subtractNumbers () {
let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);

document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

function subtract (number1, number2) {
    return number1 - number2;
}

/* Arrow Function - Multiply Numbers */
document.querySelector('#multiplyNumbers').addEventListener('click', () => {

    let  multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let  multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply( multiplyNumber1, multiplyNumber2);
  });
  
  const multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
document.querySelector('#divideNumbers').addEventListener('click', () => {

    let  divideNumber1 = Number(document.querySelector('#dividend').value);
    let  divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide( divideNumber1, divideNumber2);
  });
  
  const divide = (number1, number2) => number1 / number2;

/* Decision Structure */
    const getTotalButton = document.getElementById('getTotal');
    const subtotalInput = document.getElementById('subtotal');
    const memberCheckbox = document.getElementById('member');
    const totalSpan = document.getElementById('total');

    getTotalButton.addEventListener('click', () => {
        let subtotal = Number(subtotalInput.value);
        if (memberCheckbox.checked) {
            subtotal *= 0.8; // Apply 20% discount
        }
        totalSpan.textContent = `$ ${subtotal.toFixed(2)}`;
    });

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
    let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Odds Only Array */
    const oddNumbers = array.filter(num => num % 2 !== 0);
    document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
    const evenNumbers = array.filter(num => num % 2 === 0);
    document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
