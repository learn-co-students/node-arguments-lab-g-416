process.argv.shift()
process.argv.shift()
var length = process.argv[0]
var num = process.argv[1]
var argv = process.argv

function generatePassword(length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	
		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));	
		}
		return text;
}

for (var i = 0; i < num; i++) {
	console.log(generatePassword(length))	
}

process.exit(0)
