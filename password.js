// code solution here
process.argv.shift()
process.argv.shift()
for(var i=0; i<process.argv[1]; i++){
	console.log(generatePassword(process.argv[0]))
}

function generatePassword(len) {
    var length = len,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}