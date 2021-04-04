let passwordLength = process.argv[2];
let quantity = process.argv[3];

const generatePassword = function(passwordLength, quantity) {
  const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*abcdefghijklmnopqrstuvwxyz";
  let text = '';

  for (let i = 1; i <= passwordLength; i++) {
      text += options.charAt([Math.floor(Math.random() * options.length)]);
    }
  return text;
}

console.log(generatePassword(passwordLength, quantity));

process.exit(0);
