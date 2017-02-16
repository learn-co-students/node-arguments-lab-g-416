var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
var length
var numOfPasswords

if (typeof(process.argv[2] === 'number')) {
  length = process.argv[2]
} else {
  console.log('Your first argument should be a number')
}

if (typeof(process.argv[3] === 'number')) {
  numOfPasswords = process.argv[3]
} else {
  console.log('Your second argument should be a number')
}

for (i = 0; i < numOfPasswords; i++) {
  var password = ''
  for (j = 0; j < length; j++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }
  console.log(password)
}
