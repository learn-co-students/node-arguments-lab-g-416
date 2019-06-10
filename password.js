process.argv.shift()
process.argv.shift()
length = parseInt(process.argv[0], 10)
numOfPasswords = parseInt(process.argv[1], 10)

while (numOfPasswords > 0){
  console.log(generatePassword(length))
  numOfPasswords -= 1
}

function generatePassword (length) {
	var password = '', character;
  debugger;
	while (length > password.length) {
		if (password.indexOf(character = String.fromCharCode(Math.floor(Math.random() * 94) + 33), Math.floor(password.length / 94) * 94) < 0) {
			password += character;
		}
	}
	return password;
}
