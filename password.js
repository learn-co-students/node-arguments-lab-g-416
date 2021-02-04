process.argv.shift()
process.argv.shift()

let length = process.argv[0],
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    password = "";

for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random()*n))
}

console.log(password)
process.exit(0)
