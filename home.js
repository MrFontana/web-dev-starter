/*
let notRounded = 1.1 + 1.3;
let roundedButWrong = (1.1 + 1.3).toFixed(2);
let roundedCorrectly = +(1.1 + 1.3).toFixed(2);

console.log(notRounded); // 2.4000000000000004
console.log(roundedButWrong); // 2.40
console.log(roundedCorrectly); // 2.4
*/

// let price = 20;
// let message = ( price > 10 ) ? 'yes' : 'no';
// showMessage(message);

// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// };

// let count = 1;
// while (count < 5) {
// 	console.log(count);
// 	count++;
// }

// let count = 1;
// do {
// 	console.log(count);
// 	count++;
// } while ( count < 5);

// let myFunction = function (message, firstName) {
// 	console.log(message);
// 	console.log(firstName);
// };

// myFunction('Hello', 'John');

// function getSecretCode(value) {
	
// 	let code = value * 42;
// 	return code;

// }

// let secretCode = getSecretCode(2);
// showMessage( secretCode );

let key = 42;

// function getSecretCode(value) {

// 	let keyGenerator = function() {
// 		let key = 12;
// 		console.log('in keyGenerator: ', key);
// 		return key;
// 	}
	
// 	let code = value * keyGenerator();
// 	console.log(' in getSecretCode: '), key;
// 	return code;

// }

// let secretCode = getSecretCode(2);
// showMessage( secretCode );

changePercentOff(32);