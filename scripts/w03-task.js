/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1+number2
}


function addNumbers(add1, add2){

    let addNumber1= Number(document.querySelector('#add1').value);

    let addNumber2= Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
   
document.querySelector('#addNumbers').addEventListener('click',addNumbers);




/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2)  {
   return number1-number2;
}
const subtractNumbers = () => {
    let subtract1 = document.getElementById('subtract1').value;
    let subtract2 = document.getElementById('subtract2').value;
    let subtractNum = subtract(subtract1, subtract2);
    document.getElementById('difference').value = subtractNum;
}   

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1,number2) =>number1*number2;
const multiplyNumbers = () =>{
let factor1 = document.getElementById('factor1').value;
let factor2 = document.getElementById('factor2').value;
let multiplyNum = multiply(factor1, factor2);
document.getElementById('product').value = multiplyNum;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const Divide = (dividend, divisor) => dividend/divisor;

const divideNumbers = () =>{
    let dividend = document.getElementById('dividend').value;
    let divisor = document.getElementById('divisor').value;
    let quotient = parseFloat(Divide(dividend, divisor));
    document.getElementById('quotient').value = quotient;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {
    let total = 0;
    // input
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    //processing
    if(document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2 ;// 20% Discount
    }

    document.getElementById('total').textContent= `$${subtotal.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', getTotal);
/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !==0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 ===0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
let mapArray = numbersArray.map((element) => element * 2 );
const sumOfMultiplied = mapArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
