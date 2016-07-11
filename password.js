function generatePassword(length){
  var length = length;
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var pass="";

  for (var i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return pass;
}

var args = process.argv;

if (!(args[2]) || !args[3]){
  console.log("Please provide two arguments!");
  process.exit(1);
}

if (args[2]){
  length = parseInt(args[2]);
}

if (args[3]){
  number = parseInt(args[3]);
}


for (var i = 0; i < number; i++) {
  console.log(generatePassword(length));
}

process.exit(0);
