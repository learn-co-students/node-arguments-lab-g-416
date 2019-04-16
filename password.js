const generatePassword = (length) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text
}

let number = process.argv.pop()
let length = process.argv.pop()

for (let i = 0; i < number; i++) {
  console.log(generatePassword(length))
}

process.exit(0)
