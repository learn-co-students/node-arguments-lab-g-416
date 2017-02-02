function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

 var length = process.argv[2];
 var amount = process.argv[3];

 for (var i = 0; i < amount; i++) {
  console.log(generatePassword(length))
 }