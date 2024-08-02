function twoSum(array1, array2) {
    return Number(array1.join('')) +  Number(array2.join(''));
 
    
}

function luckyNumber(value) {
    const strValue = String(value);
    return strValue === strValue.split('').reverse().join('');
}

function errorMessage(input) {
    if (!input) 
        return 'Required field';
   
     return Number(input) ? '' : 'Must be a number besides 0';
}

function calculateSum() {
    const array1 = document.getElementById('array1').value.split(',').map(Number);
    const array2 = document.getElementById('array2').value.split(',').map(Number);
    const sum = twoSum(array1, array2);
    document.getElementById('sumResult').textContent = 'Sum: ' + sum;
}

function checkPalindrome() {
    const number = document.getElementById('number').value;
    const isPalindrome = luckyNumber(number);
    document.getElementById('palindromeResult').textContent = isPalindrome ? 'This is a palindrome' : 'This is not a palindrome';
}

function validateInput() {
    const userInput = document.getElementById('userInput').value;
    const message = errorMessage(userInput);
    document.getElementById('validationResult').textContent = message;
}