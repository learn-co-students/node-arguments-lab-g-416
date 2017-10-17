// code solution here

var generatePassword = length => {
	var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		output = "";

	for (var i = 0; i < length; i++) {
		output += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}

	return output;
};

if (typeof process.argv[2] !== 'string' ||
	process.argv[2].length === 0 ||
	typeof process.argv[3] !== 'string' ||
	process.argv[3].length === 0) {

	console.log('Please provide two integer arguments for password length and number of passwords.');
	process.exit(1);
}

var length = parseInt(process.argv[2], 10),
	numPws = parseInt(process.argv[3], 10);

if (!(length >= 0)) {
	console.log('Password length must be a positive integer.')
	process.exit(1);
}

if (!(numPws >= 0)) {
	console.log('Number of passwords must be a positive integer.')
	process.exit(1);
}

for (var i = 0; i < numPws; i++) {
	console.log(generatePassword(length));
};

process.exit(0);