if (process.argv.length != 4) {
  console.log('Please provide two arguments.\n')
  process.exit(0)
}

var len = process.argv[2]
var num = process.argv[3]

function generatePassword(len) {
  var text = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for(var i=0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text
}

for (var i=0; i < num; i++) {
  console.log(generatePassword(len))
}
