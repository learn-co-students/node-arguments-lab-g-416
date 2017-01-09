function generatePassword(vlength) {
    var length = vlength,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


process.argv.shift()
process.argv.shift()
var plength = process.argv[0]
var num = process.argv[1]
while (num > 0) {
  console.log(generatePassword(plength))
  num--
}

process.exit(0)