// code solution here

process.argv.shift()
process.argv.shift()

let length = process.argv[0],
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    passwordValue = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        passwordValue += charset.charAt(Math.floor(Math.random()*n))
}

console.log(passwordValue)
process.exit(0)