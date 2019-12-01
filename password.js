// code solution her
const  password = (length) =>{
  let password = ""
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0, n = alphabet.length; i < length; ++i) {
        password += alphabet.charAt(Math.floor(Math.random() * n));
    }
    return password
}
let argv = process.argv
let amount = parseInt(argv[3])
let length =  parseInt(argv[2])
for (var i = 1; i <=amount; i++) {
  console.log(password(length))
}
process.exit(0)
