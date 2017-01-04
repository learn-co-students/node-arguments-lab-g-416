function generatePassword(pwdLength) {
    var length = pwdLength,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);    
}

for (var i = 0; i < process.argv[3]; i++) {
  generatePassword(process.argv[2]);
}

if (process.argv.length < 4) {
  console.log("Wrong number of arguments. Try again.")
}

process.exit(0);