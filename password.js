// code solution here
process.argv.shift()
process.argv.shift()

let length = process.argv[0],
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
retVal = "";

for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
}

console.log(retVal)
process.exit(0)