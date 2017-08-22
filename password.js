// code solution here
length = process.argv[2];
number = process.argv[3];

const randomPassword = length => {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += String.fromCharCode(Math.random()*(122-97+1) + 97);
  }
  return password;
}

for(var i = 0; i < number; i++) {
  console.log(randomPassword(length));
}