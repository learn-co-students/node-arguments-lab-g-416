// code solution here
process.argv.shift()
process.argv.shift()
let length = process.argv[0]
let number = process.argv[1]
let argv = process.argv

function generatePassword() {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
  }
    for(let i = 0; i < number.length; i++){
    console.log(generatePassword(length))
}

process.exit(0)
