// code solution here


function generatePassword(size){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var randomstring = ''
    for (var i=0; i<size; i++) {
        var rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars[rnum]
    }
    return randomstring;
}

var length = parseInt(process.argv[2], 10)
var numPasswords = parseInt(process.argv[3], 10)
var n = 0;

while (n<numPasswords){
    console.log(generatePassword(length))
    n++;
}
process.exit(0);
