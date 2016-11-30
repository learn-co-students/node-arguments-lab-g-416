if (process.argv.length < 4){
  var arg_num = process.argv.length - 2
  return console.log('expected 2 arguments, got ' + arg_num)
}

var length = process.argv[2]
var num = process.argv[3]

for (var i = 0; i < num; i++){
  console.log(generatePassword(length))
}

function generatePassword(length){
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  var pw = ""
  for (var i = 0, n = charset.length; i < length; i++){
    pw += charset.charAt(Math.floor(Math.random() * n))
  }
  return pw
}
