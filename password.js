

  let passwords = [];
  for (var i=0; i < process.argv[3]; ++i) {
    passwords.push(generatePassword(process.argv[2]))
  }
  passwords.forEach(password => console.log(password))



function generatePassword(length) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

//password(process.argv[2], process.argv[3])

process.exit(0)
