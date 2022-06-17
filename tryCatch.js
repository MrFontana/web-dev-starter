// Exceptions

// Try / Catch

function simpleTryCatch() {
	let result;

	try {
		result = x / 10;
	} catch ( error ) {
		console.log(error.message);
	}
}

// Finally Failed Sample

function finallyCatchSample() {
	let result;

	try {
		console.log('An error will occur.');
		result = x / 10;
		console.log('this line will never run.');
	} catch (error) {
		console.log('In the "Catch" block: ' + error.message)
	}
	finally {
		console.log('In the "Finally" block.')
	}
}

// Finally Failed Sample

function finallySuccessfulSample() {
	let result;
	let x = 100;

	try {
		console.log('An error will not occur.');
		result = x / 10;
	} catch (error) {
		console.log('In the "Catch" block: ' + error.message)
	}
	finally {
		console.log('In the "Finally" block.')
	}
};

// Throw

function throwError() {
	try {
		attemptDivision();
	} catch (error) {
		console.log(error.message + ' - Error Type: ' + error.name);
	}
};

function attemptDivision() {
	let result;

	try {
		result = x / 10;
	} catch (error) {
		// Always include at least 'message' and a 'name' properties
		throw {
			'message': 'In the attemptDivision() method the following error occurred: ' + error.message,
			'name': 'CustomError'
		}
	}
}

// Reference Error Sample

function referenceError() {
	let result;

	try {
		// Reference error because the 'x' is not defined
		result = x / 10;
	} catch (error) {
		handleError(error);
	}
};

// Range Error Sample

function rangeError() {
	let result = 0;

	try {
		// Range error because a number cannot have 200 significant digits
		result.toPrecision(200);
	} catch (error) {
		handleError(error);
	}
};

// Type Error Sample

function typeError() {
	let result = 0;

	try {
		// Type error because result is a numeric
		result.toUpperCase();
	} catch (error) {
		handleError(error);
	}
};

// URI Error Sample

function uriError() {
	let uri = 'https://www.example.com/path%%%/file name';

	try {
		// Reference error because the 'x' is not defined
		decodeURI(uri);
	} catch (error) {
		handleError(error);
	}
};

// Syntax Error Sample

function syntaxError() {
	try {
		// Syntax error because missing a final single quote
		let sum = eval('alert("Hello)')
	} catch (error) {
		handleError(error);
	}
};

function handleError(error) {
	switch (error.name) {
		case 'ReferenceError':
			console.log('Reference error: ' + error.message);
			break;
		case 'RangeError':
			console.log('Range error: ' + error.message);
			break;
		case 'TypeError':
			console.log('Type error: ' + error.message);
			break;
		case 'URIError':
			console.log('URI error: ' + error.message);
			break;
		case 'SyntaxError':
			console.log('Syntax error: ' + error.message);
			break;
		case 'EvalError':
			console.log('SynEvaltax error: ' + error.message);
			break;
		default:
			console.log('Error Type: ' + error.name + ' - Message: ' + error.message);
			break;
	}
}