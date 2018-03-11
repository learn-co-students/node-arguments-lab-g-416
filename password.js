const length = process.argv[2]
const numberOfPasswords = process.argv[3]

const genPassword = length => {
    const charactors = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    password = ''
    for(let i = 0; i < length; i++){
        const randomNumber = Math.floor(Math.random() * charactors.length)
        
        password += charactors[randomNumber]
    }
    return password
}



let counter = 0
while ( counter < numberOfPasswords) {
        counter++

        console.log(genPassword(length))

}

