length = process.argv[2]
passwords = process.argv[3]

const generatePassword = lengthParam => {
  const length = parseInt(lengthParam)
  
  if (typeof length === "number" && length > 1) {
    const chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890"
    let password = ""
  
    for (let x = 0; x < length; x++) {
      const index = Math.floor(Math.random() * chars.length)
      password += chars.charAt(index)
    }
  
    return password
  } else {
    return "Parameter must be an interger."
  }
}

console.log(generatePassword(length))