// process.argv.shift();
// process.argv.shift();

var passwords = [];
var length = process.argv[2];
var count = process.argv[3];
while (count > 0) {
  passwords.push(generatePassword(length));
  count--;
}

passwords.forEach(function(password) {
        console.log(password);
    });

process.exit(0);


function generatePassword(length) {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
