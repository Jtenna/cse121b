/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers () {
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);

document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

function add (number1, number2) {
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
    
    function subtract(number1, number2) {
    return number1 - number2;
    }
    
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

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
    const getTotalButton = document.querySelector('#getTotal');
    const subtotalInput = document.querySelector('#subtotal');
    const memberCheckbox = document.querySelector('#member');
    const totalSpan = document.querySelector('#total');

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
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number)
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
numbersArray.map(number => number * 2)
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
let multipliedSum = numbersArray.map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
document.querySelector('#sumOfMultiplied').innerHTML = multipliedSum;
