var generatePassword = function generatePassword(length, charset) {
  var charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      password = '';

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
}

var length,
    passwords;
var argv = process.argv

if (!argv[2] || !argv[3]) {
  console.log('Please provide an argument')
  process.exit(1)
}

if (argv[2]) {
  length = parseInt(argv[2], 10)
}
if (argv[3]) {
  passwords = parseInt(argv[3], 10)
}

for (var i = 0; i < passwords; i++) {
  console.log(generatePassword(length))
}

process.exit(0)
