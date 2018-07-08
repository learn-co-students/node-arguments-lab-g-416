process.argv.shift()
process.argv.shift()
length = parseInt(process.argv[0])
numOfPasswords = parseInt(process.argv[1])

while (numOfPasswords > 0){
  console.log(generatePassword(length))
  numOfPasswords -= 1
}

function generatePassword (length) {
	var password = '', character;
	while (length > password.length) {
		if (password.indexOf(character = String.fromCharCode(Math.floor(Math.random() * 94) + 33), Math.floor(password.length / 94) * 94) < 0) {
			password += character;
		}
	}
	return password;
}
