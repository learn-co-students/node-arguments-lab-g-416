/*process.argv.shift()
process.argv.shift()

var num_passwords = process.argv[1]
var length = process.argv[0]

var passwords = [];

for(var i = 0; i < num_passwords; i++){
  passwords.push(Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1)));
  //passwords.push()
}

console.log(passwords);*/

var generatePassword = function generatePassword(length, charset) {
  var length = length || 8,
    charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    password = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
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
  
