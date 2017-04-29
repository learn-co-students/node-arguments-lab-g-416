var possibleCharacters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
                            "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

process.argv.shift()
process.argv.shift()

var passwordLength = 0;
var numPasswords = 0;

if (isNaN(process.argv[0])) {
    return console.log("Error! Please make sure that length is a number.");
} else if (!process.argv[1] || isNaN(process.argv[1])) {
    passwordLength = process.argv[0]
    numPasswords = 1;
} else {
    passwordLength = process.argv[0]
    numPasswords = process.argv[1]
}


// outer loop determines number of passwords to print
for (i=0;i<numPasswords;i++) {
    var output = "";
    for (j=0;j<passwordLength;j++) {
        var random = Math.floor(Math.random() * 62);
        output += possibleCharacters[random];
    }
    console.log(output);
}