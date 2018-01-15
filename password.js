const crypto = require('crypto');

var generatePassword = function generatePassword(length) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
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
