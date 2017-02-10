var passwordLength = process.argv[2];
var numberOfPasswords = process.argv[3];

var generatePassword = function(passwordLength, numberOfPasswords) {
  var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*abcdefghijklmnopqrstuvwxyz";
  var passwordCollection = '';

  for (var j = 1; j <= passwordLength; j++) {
      passwordCollection += options.charAt([Math.floor(Math.random() * options.length)]);
    }
  return passwordCollection;
}

console.log( generatePassword(passwordLength, numberOfPasswords) );

process.exit(0);
