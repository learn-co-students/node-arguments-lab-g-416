// code solution here
var charLength = parseInt(process.argv[2]);
var passwordCount = parseInt(process.argv[3]);
for (i = 1; i <= passwordCount; i++){
  console.log(generatePassword(charLength));
}
process.exit(0);

function generatePassword(charLength){
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < charLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
