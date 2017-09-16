// code solution here
length = process.argv[2]
quantity = process.argv[3]

function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

for (var i = 0; i < quantity; i++) {
  console.log(generatePassword(length));
}
