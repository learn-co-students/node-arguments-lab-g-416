const randomNum = () => {
  min = Math.ceil(1);
  max = Math.floor(9);
  return (Math.floor(Math.random() * (max - min)) + min).toString();
}

const generatePassword = (passwordLength) => {
  var passwordLength = passwordLength;
  var password = "";
  for (var i=0; i < passwordLength; i++){
    password += randomNum();
  }
  return password;
}

process.argv.shift()
process.argv.shift()

const createPasswords = (passwordLength, numberOfPasswords) => {
  var passwords = Object.assign([]);

  for (i=0; i < numberOfPasswords; i++){
    console.log(generatePassword(passwordLength));
  }
}

createPasswords(process.argv[0], process.argv[1]);
process.exit(0)
