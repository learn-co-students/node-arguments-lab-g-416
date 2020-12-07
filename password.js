if (process.argv.length !== 4) {
    throw Error('Wrong number of arguments');
} else if (!parseInt(process.argv[2]) || !parseInt(process.argv[3])) {
    throw Error('Wrong data type')
}

process.argv.shift();
process.argv.shift();

let len = parseInt(process.argv[0]);
let num = parseInt(process.argv[1]);
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generatePassword(len) {
    
    let password = "";

    while(len > 0) {
        password += charset[Math.floor(Math.random() * charset.length)];
        len -= 1;
    }
    console.log(password);
}

while (num > 0) {
    generatePassword(len);
    num -=1;
}

process.exit(0);