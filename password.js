// code solution here
function generatePassword(passwordLength) {
  const length = passwordLength;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(retVal)
  return retVal;
}

const passwordLength = parseInt(process.argv[process.argv.length - 2])
for (var i = 0; i < parseInt(process.argv[process.argv.length - 1]); i++) {
  generatePassword(passwordLength)
}
