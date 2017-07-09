// code solution here

var length = process.argv[2]
var amount = process.argv[3]
function generatePassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyz"
  var pass = "";
  for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i)
  }
  return pass
}

for (x=0; x < amount; x++){
  console.log(generatePassword(length))
}
process.exit(0)