var generatePassword = function generatePassword(length) {
  var length = length,
    charset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    password = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
}


if (!process.argv[2] || !process.argv[3]) {
  console.log('Error. Missing argument.')
  process.exit(0)
}
if (process.argv[2]) {
  length = parseInt(process.argv[2], 10)
}
if (process.argv[3]) {
  number = parseInt(process.argv[3], 10)
}

for (var i = 1; i <=number; i++) {
  console.log(generatePassword(length))
}

process.exit(0)
