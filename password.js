function generatePassword(length) {
  let password = ""
  for (i=0; i < length; i++) {
    password = password + `${Math.floor(Math.random()*10)}`
  }
  return password
}

function password(number, length) {

  for (i=0; i< number; i++) {
    console.log(generatePassword(length))
  }
  process.exit(0)
}

process.argv.shift()
process.argv.shift()
if(process.argv.length !== 2){
  console.log("The number of arguments is incorrect")
} else {
  let number = process.argv.shift()
  let length = process.argv.shift()
  module.exports = password(length, number)
}
