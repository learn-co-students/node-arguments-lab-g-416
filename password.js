// code solution here

var temp = '';
var keylistalpha="abcdefghijklmnopqrstuvwxyz";
var keylistint="0123456789";
var keylistspec="!@#_.";
var length = process.argv[2]
var numOfPasswords = process.argv[3]

if (typeof(length) !== 'undefined' && length && typeof(numOfPasswords) !== 'undefined' && numOfPasswords) {
    generatePasswords(numOfPasswords);
} else {
    console.log('Wrong number of arguments. Bummer.');
}

function generatePasswords(numofPasswords) {
    for (var i=0; i<numOfPasswords; i++) {
        console.log(generatePassword(length));
    }
}

function generatePassword(length) {
    //generate password here
    // for (i=0; i<length; i++) {
    //     temp+=keylistalpha.charAt(Math.floor(Math.random()*length.length));
    // }
    // for (i=0; i<keylistspec; i++) {
    //     temp+=keylistspec.charAt(Math.floor(Math.random()*keylistspec.length));
    // }
    // for (i=0; i<length; i++) {
    //     temp+=keylistint.charAt(Math.floor(Math.random()*keylistint.length));
    // }
    // temp = temp.split('').sort(function(){
    //     return 0.5-Math.random()
    // }).join('')
    for (var i=0; i<length; i++) {
        temp+= String.fromCharCode(Math.floor(Math.random()*length.length));
    }
    console.log(temp)
    return temp; 
}