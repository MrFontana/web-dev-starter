// This keyword example

'use strict';

// Global Scope - 'this' is mapped to global/window object
console.log('Begin: global scope sample');
console.log(this.toString());
console.log('This === window = ' + (this === window).toString());
console.log('End: global scope sample');

// Function Scope - 'this' is mapped to global/window object
// uncomment 'use strict' above to show how it affects this function
function functionScope() {
	console.log(this.toString());
	console.log('this === window = ' + (this === window).toString());
}

// Event Handlers

// pass 'this' to function from event handler
function eventHandler(ctl) {
	console.log(ctl.toString());
}

// Object Literal
function objectLiteral(params) {
	let product = {
		'productID': 680,
		'name': 'HL Road Frame - Black, 58',
		'standardCost': 1059.31,
		'listPrice': 1431.50,
		grossProfit: function () {
			return (this.listPrice - this.standardCost)
				.toLocaleString('en-US', {
					style: 'currency', currency: 'USD'
				});
		}
	};
	console.log(product.grossProfit());
}

// Call() and Apply()
function callAndApply() {
	let product = {
		'productID': 680,
		'name': 'HL Road Frame - Black, 58',
		'standardCost': 1059.31,
		'listPrice': 1431.50,
		grossProfit: function () {
			return (this.listPrice - this.standardCost)
				.toLocaleString('en-US', {
					style: 'currency', currency: 'USD'
				});
		}
	};

	let prod2 = {
		'standardCost': 500,
		'listPrice': 850
	}

	// Call using reference to 'product' properties
	console.log(product.grossProfit.call(product));

	// call using reference to 'prod2' properties
	console.log(product.grossProfit.call(prod2));
	console.log('');
	console.log(product.grossProfit.apply(product));
	console.log(product.grossProfit.apply(prod2));
}

// Constructors
function Product(id, name, cost, price) {
	this.productID = id;
	this.name = name;
	this.standardCost = cost;
	this.listPrice = price;
	this.grossProfit = function () {
		return (this.listPrice - this.standardCost).toLocaleString('en-US', {
			style: 'currency', currency: 'USD'
		});
	}
}

function constructorFunctions() {
	let prod1 = new Product(680, 'HL Road Frame - Black, 58', 1059.31, 1431.50);
	let prod2 = new Product(707, 'Sport-100 Helmet, Red', 13.08, 34.99);
	console.log(prod1.grossProfit());
	console.log(prod2.grossProfit());
}