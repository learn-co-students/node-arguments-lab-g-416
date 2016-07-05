// code solution here
var arg = process.argv;


function generatePassword(passwordLength){
  var password = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i=0; i < passwordLength; i++){
    password += possible.charAt(Math.floor(Math.random() * possible.length));

  }
  return password;
}

for (var i = 0; i < arg[3]; i++){
  console.log(generatePassword(arg[2]))
}
//if child_process.spawn
process.exit(0);
