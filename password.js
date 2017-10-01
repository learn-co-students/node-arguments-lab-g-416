// code solution here
var length = process.argv[2]
var amount = process.argv[3]


generatePasswords(length, amount)

function generatePasswords(length, amount) {

    var passwords = []

    for (i = 0; i < amount; i++ ) {
        var password = ""
        for (j = 0; j < length; j++ ) {
            password += Math.floor((Math.random() * 10))
        }
        passwords.push(password)
    }

    passwords.forEach(function(password) {
        console.log(password)
    })
}

process.exit()