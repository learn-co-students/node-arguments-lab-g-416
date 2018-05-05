// code solution here
const length = process.argv[2];
const count = process.argv[3];

function generatePassword(passwordLength) {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 65 + Math.round(Math.random()) * 32)
  }
  return password;
}

for (let i = 0; i < count; i ++) {
  console.log(generatePassword(length));
}
