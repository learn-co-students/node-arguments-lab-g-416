// code solution here
var argv = process.argv
var i

function generatePassword(length) {
  var passwordCharacters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
  var newPassword = ''
  var i

  for (i = 0; i < length; i++) {
    newPassword +=  passwordCharacters.charAt(Math.floor(Math.random() * 62))
  }

  return newPassword
}


for (i = 0; i < argv[3]; i++) {
  console.log(generatePassword(argv[2]))
}

process.exit(0)
