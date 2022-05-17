// Quirks when working with math in javascript
/*
let notRounded = 1.1 + 1.3;
let roundedButWrong = (1.1 + 1.3).toFixed(2);
let roundedCorrectly = +(1.1 + 1.3).toFixed(2);

console.log(notRounded); // 2.4000000000000004
console.log(roundedButWrong); // 2.40
console.log(roundedCorrectly); // 2.4
*/

let price = 20;
let message = ( price > 10 ) ? 'expensive' : 'cheap';

showMessage(message);
