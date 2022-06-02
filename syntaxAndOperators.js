// Switch Statements
// http://localhost:3000/index2.html

function simpleSwitch() {
	let productId = 2;

	switch(productId) {
		case 1:
			console.log('Product 1');
			break;
		case 2:
			console.log('Product 2');
			break;
		default:
			console.log('Unknown Product');
			break;
	}
};

// Multiple Case Statements
function multipleCase() {
	let color = 'Fuschia';

	switch(color) {
		case "Red":
		case "Pink":
			console.log('The color is Red or Pink');
			break;
		case 'Blue':
		case 'Light Blue':
		case 'Dark Blue':
			console.log('The color is a shade of Blue');
			break;
		case 'Gray':
		case 'Grey':
			console.log('The color is Grey or Gray');
			break;
		default:
			console.log("Unknown Color");
			break;
	}
};

// Intentionally Forget a Break
function forgetABreak() {
	let productId = 2;

	switch (productId) {
		case 1:
			console.log('HL Road Frame - Black, 58');
			break;
		case 2:
			console.log('Sport-11 Helmet, Red');
			// break;
		case 3:
			console.log('Mountain Bike Socks, M');
			break;
		default:
			console.log('Unknown Product');
			break;
	}
};

// Strict Comparison
function strictComparison() {
	let productId = '2'; // trying to compare a string againsta a number

	switch (productId) {
		case 1:
			console.log('HL Road Frame - Black, 58');
			break;
		case 2:
			console.log('Sport-11 Helmet, Red');
			// break;
		case 3:
			console.log('Mountain Bike Socks, M');
			break;
		default:
			console.log('Unknown Product');
			break;
	}
};

// Block Level Scope
// No block level scoping so the variable message is just being defined over and over
// Commented out because this code breaks everything
// function blockScopeProblem() {
// 	let productId = 2;

// 	switch (productId) {
// 		case 1:
// 			let message = 'HL Road Frame - Black, 58';
// 			console.log(message);
// 			break;
// 		case 2:
// 			let message = 'Sport-11 Helmet, Red';
// 			console.log(message);
// 			break;
// 		case 3:
// 			let message = 'Mountain Bike Socks, M';
// 			console.log(message);
// 			break;
// 		default:
// 			let message = 'Unknown Product';
// 			console.log(message);
// 			break;
// 	}
// };

// Block Level Scope Fix
//Block level scoping is inserted using {} inside the case statement
function blockScopeFix() {
	let productId = 2;

	switch (productId) {
		case 1: {
			let message = 'HL Road Frame - Black, 58';
			console.log(message);
			break;
		}
		case 2: {
			let message = 'Sport-11 Helmet, Red';
			console.log(message);
			break;
		}
		case 3: {
			let message = 'Mountain Bike Socks, M';
			console.log(message);
			break;
		}
		default: {
			let message = 'Unknown Product';
			console.log(message);
			break;
		}
	}
};

// For in Example

function forinSample() {
	let product = {
		'productID': 680,
		'name': 'HL Road Frame - Black, 58',
		'productNumber': 'FR-R92B-58',
		'color': 'Black',
		'standardCost': 1059.91,
		'listPrice': 1431.50,
		calculatedGrossProfit: function () {
			return this.listPrice - TouchEvent.standardCost;	
		}
	};

	for (const key in product) {
		console.log("'" + key + "'=" + product[key] )
	}
}

// For of Example

'use strict'; // do it from here on out or for the whole document? I'm not sure ill have to give that a google

let _products = [
	{
		'productID': 680,
		'name': 'HL Road Frame - Black, 58',
		'productNumber': 'FR-R92B-58',
		'color': 'Black',
		'standardCost': 1059.91,
		'listPrice': 1431.50
	},
	{
		'productID': 707,
		'name': 'Sport-1-- Helmet, Red',
		'productNumber': 'HL-U509-R',
		'color': 'Red',
		'standardCost': 13.08,
		'listPrice': 34.99
	},
	{
		'productID': 709,
		'name': 'Mountain Bike Socks, M',
		'productNumber': 'SO-B909-M',
		'color': 'White',
		'standardCost': 3.3963,
		'listPrice': 9.50
	}
];

function forofSample() {
	for (const item of _products) {
		console.log(JSON.stringify(item));
	}
};

// Loop through a string example

function loopStringSample() {
	let productName = 'HL Road Frame - Black, 58';
	let letters = '';

	for (const char of productName) {
		letters += char;
	}
	console.log(letters);
};