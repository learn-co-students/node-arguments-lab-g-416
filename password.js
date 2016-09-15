// code solution here
var password = '';
var length = parseInt(process.argv[2]);
var quantity = parseInt(process.argv[3]);
var remainder = length % 16;
var x = Math.floor(length / 16);

var randomString =  function () {
  return Math.random().toString(36).slice(-16);
}

var generatePassword = function () {
  if (x <= 1) {
    return randomString().slice(-length);
  } else {
    password = '';
    for (var i = 0; i < x; i++) {
      password += randomString();
    }
    return password += randomString().slice(-remainder)
  }
}

if (!process.argv[3]) {
  console.log('Missing arguments');
} else if ( isNaN(length)|| isNaN(quantity) ) {
  console.log('Arguments must be numbers');
} else {
  for (var i = 0; i < quantity; i++) {
    console.log(generatePassword());
  }
}

process.exit(0);
