var length = parseInt(process.argv[2], 10);
var quantity = parseInt(process.argv[3], 10);

function generatePassword (passLength) {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz1234567890!@#$%^&*";
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

for (var i = 0; i < quantity; i++) {
  console.log(generatePassword(length));
}

process.exit(0);