process.argv.shift();
process.argv.shift();
let len = parseInt(process.argv[0]);
let num = parseInt(process.argv[1]);
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
function generatePassword(len) {
    let password = '';
    while (len > 0) {
    let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    password += letter;
    len -= 1;
    }
    console.log(password);
    return password
}

if (!process.argv[0] || !process.argv[1]) {
    console.log('Please provide two arguments')
    process.exit(0)
}

while (num > 0) {
    generatePassword(len);
    num -= 1;
}
process.exit(0);
