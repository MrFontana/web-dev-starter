// http://localhost:3000/
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

// let key = 42;

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

// changePercentOff(32);

// let mySymbol = Symbol();

// let person = {
// 	name: "John",
// 	age: 32,
// 	partTime: false,
// 	[mySymbol]: 'secretInformation'
// };

// // person.age = 33;
// person['age'] = 44;

// showMessage(person.age);

// let person = {
// 	name: "John",
// 	age: 32,
// 	partTime: false,
// 	showInfo: function(realAge) {
// 		showMessage(this.name + ' is ' + realAge);
// 	}
// };

// showMessage( typeof person.showInfo );

// const button = document.getElementById("see-review");

// button.addEventListener('click', function() {
	
// 	const review = document.getElementById('review');

// 	if (review.classList.contains('d-none')) {
// 		review.classList.remove('d-none');
// 		button.textContent = 'Close Review'
// 	} else {
// 		review.classList.add('d-none');
// 		button.textContent = 'See Review'
// 	}
// });

// const values = ['a', 'b', 'c', 'd', 'z'];

// console.log(Array.isArray(values));

// push()
// values.push('d');

// pop()
// const last = values.pop();

//shift()
// const first = values.shift();

//unshift()
// values.unshift('a');

//slice()
// const newValues = values.slice(1, 2);

//splice()
// values.splice(1, 1); // remove index
// values.splice(1, 0, 'foo'); // a foo b c

// values.splice(2, 1, 'hello');

// console.log( values ); 

//indexOf()

// console.log( values.indexOf('c') ) //2
// console.log( values.indexOf('d') ) //-1

//filter()

// const set = values.filter(function(item) {
// 	return item > 'a';
// })

//find()

// const found = values.find(function(item) {
// 	return item.length > 1;
// });

// const set = values.filter(function(item) {
// 	console.log('item: ', item);
// 	return item > 'b';
// })

//forEach()
// values.forEach(function(item) {
// 	console.log(item);
// });

// const containers = document.getElementsByClassName('container');
// containers[0].classList.add('d-none');

// console.log( containers );

// Scopes and Hoisting
// const app = {
// 	productId: 12345,
// 	userName: 'Joe',
// 	orderNumber: 789
// };

//global scope
// let productId = 12345;

// function showProductId() {
// 	// function scope 
// 	//let productId = 12345;

// 	function fix () {
// 		// function scope
// 		// let productId = 45678;
// 		console.log('in fix: ', productId);
// 	}

// 	fix();

// 	console.log(productId);
// }

// showProductId();

// 'use strict';

// let productId = 1234;

// console.log(productId);