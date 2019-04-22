var generator = require('generate-password');

process.argv.shift()
process.argv.shift()
const length = process.argv[0];
const number = process.argv[1];

const passwords = generator.generateMultiple(number, {
    length: length,
    uppercase: false
});

passwords.forEach( password => console.log(password) )
process.exit(0);
