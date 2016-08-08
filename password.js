function generatePassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var pass="";

  for (var x=0; x<length; x++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

var args = process.argv;

for (var y=0; y<args[3]; y++) {
  console.log(generatePassword(args[2]));
}

process.exit(0);
