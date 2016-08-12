// code solution here

var length = process.argv[2];
var quantity = process.argv[3];

for (var i = 0; i < quantity; i++) {
  var password = "";
  var keyValues = "abcdefghijklmnopqrstvuwxyzABCDEFGHIJKLMNOPQRSTVUWXYZ0123456789";
  for (var j = 0; j < length; j++) {
    password += keyValues[Math.floor(Math.random() * keyValues.length)];
  }
  console.log(password);
}

process.exit(0);
