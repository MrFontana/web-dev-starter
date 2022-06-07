// Spread Operator

// String to array
function stringToArray() {
	let productNumber = 'FR-R92B-58'
	let values = [...productNumber];
	console.log(values);
}

// Copy an Array
function copyArray() {
	let arr = [1,2,3];
	let arr2 = [...arr];

	// Make changes to duplicated array
	arr2.push(4);
	arr2[0] = 99;

	console.log(arr);
	console.log(arr2);
}

// Copy Object Arrays
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

function copyObjectArrays() {
	// Careful with object arrays
	// The array is copied, but the underlying objects are still accessed
	let diff = [..._products];

	// Modify a property of the new array
	diff[0].productID = 999;

	console.log(_products[0].productID);
	console.log(diff[0].productID);
}

// Concatenate two arrays together
let _newProducts = [{
	productID: 712,
	name: 'AWC Logo Cap',
	productNumber: 'CA-1098',
	color: 'Multi',
	standardCost: 6.9223,
	listPrice: 8.99
},
{
	productID: 821,
	name: 'Touring Front Wheel',
	productNumber: 'FW-T905',
	color: 'Black',
	standardCost: 96.7964,
	listPrice: 218.01
}];

// Concatenation
function concatenateArray() {
	let allProducts = _products.concat(_newProducts);
	console.log(allProducts.length);

	let spProducts = [..._products, ..._newProducts];
	console.log(spProducts.length);
}

// Inside a constructor

// use with 'new'
function spreadInConstructor() {
	let dt = new Date(2019, 10, 15);
	console.log(dt);

	let dateFields = [2019, 11, 15];
	dt = new Date(...dateFields);
	console.log(dt);
}

// Spread function arguments
function spreadForFunctionArgs() {
	multipleParams(1,2,3);

	let args = [1,2,3];
	multipleParams(...args);
}

function multipleParams(arg1, arg2, arg3) {
	console.log(arg1);
	console.log(arg2);
	console.log(arg3);
	console.log('');
}