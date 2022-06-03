// Math Operators

function mathSample() {
	let price = 200;
	let result = 0;

	console.log('price = ' + price.toString());
	
	// Addition
	result = price + 100;
	console.log('price + 100 = ' + result.toString());

	// Subtraction
	result = price - 10;
	console.log('price - 10 = ' + result.toString());
	
	// Multiplication
	result = price * 2;
	console.log('price * 2 = ' + result.toString());
	
	// Division
	result = price / 2;
	console.log('price / 2 = ' + result.toString());
	
	// Exponentiation
	result = price ** 2;
	console.log('price ** 2 = ' + result.toString());
	
	// Modulus
	result = price % 3;
	console.log('price % 3 = ' + result.toString());
	
	// Increment
	result = price++;
	console.log('result = price++ = ' + result.toString());
	console.log('price = ' + price.toString());
	result = ++price;
	console.log('result = ++price = ' + result.toString());

	// Decrement
	result = price--;
	console.log('result = price-- = ' + result.toString());
	console.log('price = ' + price.toString());
	result = --price;
	console.log('result = --price = ' + result.toString());
}

// Plus Sign Samples with Numbers and Strings

function plusSignSample() {
	let price = 200;
	let stringValue = '100';
	let result = 0;

	console.log('price = ' + price.toString());

	result = price + stringValue;
	console.log('result (number + stringValue) = ' + result.toString());
	
	result = price + (+stringValue);
	console.log('result (number + (+stringValue)) = ' + result.toString()); // Adding '+' before a string will convert it to a number if possible
}
 
// Assignment Samples

function assignmentSample() {
	let price = 200;

	console.log('price = ' + price.toString());

	// Addition
	price += 100;
	console.log('price += 100 = ' + price.toString());

	// Subtraction
	price -= 100;
	console.log('price -= 100 = ' + price.toString());

	//Multiplication
	price *= 2;
	console.log('price *= 2 = ' + price.toString());

	// Division
	price /= 2;
	console.log('price /= 2 = ' + price.toString());
	
	// Expomnentiation
	price **= 2;
	console.log('price **= 2 = ' + price.toString());
	
	// Modulus
	price %= 3;
	console.log('price %= 3 = ' + price.toString());
}

// Comparison Example
function comparisonSample() {
	let price = 200;
	let result = 0;

	console.log('price = ' + price.toString());
	console.log('');
	
	// Equal To
	console.log('price == price = ' + (price == price).toString());
	
	// Equal To
	result = price.toString();
	console.log('price(number) == result(string) = ' + (price == result).toString());

	// Equal To / Equal Type
	result = price;
	console.log('price(number) === result(number) = ' + (price === result).toString());
	
	// Equal To / Equal Type
	result = price.toString();
	console.log('price(number) === result(string) = ' + (price === result).toString());
	console.log('');

	// Not Equal To
	result = 100;
	console.log('result = ' + result.toString());
	console.log('price(number) != result(string) = ' + (price != result).toString());

	// Not Equal To
	result = price.toString();
	console.log('price(number) !== result(string) = ' + (price !== result).toString());
	console.log('');

	// Greater Than
	console.log('price > 10 = ' + (price > 10).toString());

	// Greater Than or Equal To
	console.log('price >= price = ' + (price >= price).toString());
	
	// Less Than
	console.log('price < 1500 = ' + (price < 1500).toString());

	// Less Than or Equal To
	console.log('price <= price = ' + (price <= price).toString());

	// Ternary
	result = price < 1500 ? 'less than 1500' : 'greater than 1500';
	console.log('ternary = ' + result);

}

// Use Strict

function useStrictSample() {
	'use strict' // comment out this line to see how below code operates

	// Can't use a cariable without 'var' or 'let' keywords
	result = 10;
	console.log(result);

	// Can't use reserved words as variables
	let eval = 10;
	let arguments = 'some args';

	// Can't delete a variable
	// delete result;

	// Can't delete a function
	// delete useStrictSample
}

