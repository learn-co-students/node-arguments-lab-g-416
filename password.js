// code solution here
console.log(process.argv);
function generatePassword(num) {
  let password = '';
  let randNum;
  const rChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKKLMONPQRSTUVWXYZ1234567890@$&!';
  for (let i = 0; i < num; i++) {
    randNum = Math.floor(Math.random() * rChars.length);
    password += rChars[randNum];
  }
  return password;
}

process.argv.shift();
process.argv.shift();
let passwordLength = parseInt(process.argv[0], 10);
let numberOfPasswords = parseInt(process.argv[1], 10);

for (let i = 0; i < numberOfPasswords; i++) {
  console.log( generatePassword(passwordLength) );
}
