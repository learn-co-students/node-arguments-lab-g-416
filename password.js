const generatePassword = l => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < l; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


const length = parseInt(process.argv[2]);
const quantity = parseInt(process.argv[3]);

console.log (length, quantity);

for (let i  = 0; i < quantity; i++) {
  console.log(generatePassword(length));
}

process.exit(0);
