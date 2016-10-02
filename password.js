function generatePassword(passwordLength) {
  var length = passwordLength,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

var args = process.argv;

if (args.length !== 4) {
  console.log("To generate passwords, you need to provide two integer arguments (length, then number of passwords to generate)");
  process.exit(1);
} else {
  var passwordLength = args[2];
  var quantityPasswords = args[3];

  for ( var i = 0; i < quantityPasswords; i ++) {
    console.log(generatePassword(passwordLength));
  }

  process.exit(0);
}
