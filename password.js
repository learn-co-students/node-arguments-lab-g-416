var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
var length;
var numberofPasswords;

if (process.argv[2]) {
  length = process.argv[2];
} else {
  console.log("Please input a first argument for password length")
}

if (process.argv[3]) {
  numberofPasswords = process.argv[3];
} else {
  console.log("Please input a second argument for how many passwords to generate");
};

for (i = 0; i < numberofPasswords; i++) {
  var password = ''
  for (j = 0; j < length; j++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }
  console.log(password)
}