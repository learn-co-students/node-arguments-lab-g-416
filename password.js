"use strict"

let error = false;
let args = process.argv;

while (!(/^\d*$/i).test(args[0]) && args.length > 0) {
	args.shift()
}

if (args.some(arg => !(/^\d*$/i).test(arg))) {
	error = true
}
if (error || args.length < 2) {
	console.log("ERROR: bad arguments")
	return 
}

const length = args.shift();
const numOfPasswords = args.shift();
let chrs = "abcdefghijklmnopqrstuvwxyz";
chrs += chrs.toUpperCase();
chrs += "1234567890!@#$%^&*()_+=-`~?";

let passwords = [];
for (let i = 0; i < numOfPasswords; i++) {
	let password = '';
	for (let j = 0; j < length; j++) {
		password += chrs[Math.floor(Math.random() * chrs.length)]
	}
	passwords.push(password)
}

passwords.forEach(password => console.log(password))