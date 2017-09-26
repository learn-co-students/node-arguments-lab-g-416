function generatePassword(passLength) {
    var length = passLength,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

if (process.argv.length > 2) {
  retPasswords = [];
  for (var i = 0; i < parseInt(process.argv[3]); i++) {
    retPasswords.push(generatePassword(process.argv[2]));
  }
  retPasswords.forEach(function(password) {
    console.log(password);
  });
} else {
  console.log('Not enough info');
}

process.exit(0)
