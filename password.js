// code solution here
length = process.argv[2];
numOfPasswords = process.argv[3];

function generatePassword(length) {
  let password = "";
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < length; i++) {
    let character = Math.floor(Math.random() * chars.length);
    password += chars.charAt(character)
  }
  return password
}

for (let i = 0; i < numOfPasswords; i++) {
  console.log(generatePassword(length));
}
