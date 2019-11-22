// code solution here
function generatePassword(len) {
    var length = len,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

var length = 10,
  number = 1
var argv = process.argv

if (!argv[2] || !argv[3]) {
  console.log('Please provide an argument, e.g., 5 or 5 10')
  process.exit(1)
}
if (argv[2]) {
  length = parseInt(argv[2], 10)
}
if (argv[3]) {
  number = parseInt(argv[3], 10)
}

for (var i = 1; i <=number; i++) {
  console.log(generatePassword(length))
}

process.exit(0)
