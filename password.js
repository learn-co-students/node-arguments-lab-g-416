const pwLength = Number(process.argv[2]);
const pwOrderCount = Number(process.argv[3]);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let pwCount = 0;

while(pwCount < pwOrderCount) {
  generatePassword();
  pwCount++;
}

function generatePassword() {
  let password = '';

  for(i = 0; i < pwLength; i++) {
    password += randomCharacter();
  }
  console.log(password);
  return password;
}



function randomCharacter() {
  const option = Math.floor(Math.random() * 3);
  let char;

  if (option == 0) {
    char = Math.floor(Math.random() * 10);
  } else if (option == 1) {
    char = alphabet[Math.floor(Math.random() * alphabet.length)];
  } else {
    char = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
  }

  return char;
}
