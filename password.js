var argv = process.argv;

function generatePassword(length) {
  var length = length,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

if (!argv[2] || !argv[3]){
  console.log('Please enter the right arguments.');
  process.exit(1);
}

if (argv[2]) {
  var length = parseInt(argv[2], 10)
}

if (argv[3]){
  var number = parseInt(argv[3], 10)
}

for (var i = 0; i < number; i++){
  console.log(generatePassword(length));
}

process.exit(0);