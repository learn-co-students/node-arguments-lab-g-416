if (require.main === module) {
  password()
} else {
  module.exports = password
}

process.exit(0)


function password() {
  let length = process.argv[2]
  let number = process.argv[3]

  if(isNaN(length) || isNaN(number)){
    return "input must be 2 numbers."
  }

  for(let i=0; i < number; i++){
    console.log(generatePassword(length))
  }
}

function generatePassword(times) {
  let out = ""
  const POS = "1234567890abcdefghijklmnopqrstuvwxyz"
  const POS_LENGTH = POS.length
  for(let i=0; i < times; i++){
    out += POS[Math.floor(Math.random()*POS_LENGTH)]
  }
  return out;
}
