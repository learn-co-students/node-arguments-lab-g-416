var length = process.argv[2]
var amount = process.argv[3]

function generatePasswords(length, amount) {
    for (i = 0; i < amount; i++) {
        var password = ""
        for (j = 0; j < length; j++) {
            password += Math.floor((Math.random() * 10))
        }
        console.log(password);
    }
}

generatePasswords(length, amount)

process.exit()