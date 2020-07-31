// code solution here
process.argv.shift()
process.argv.shift()

let length = process.argv[0]
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" //global variable
reVal = ""

for (let i = 0, n = charset.length; i < length; ++i) {
    retval += charset.charAt(Math.floor(Math.random() * n));
}

console.log(retVal)
prociess.exit(0)