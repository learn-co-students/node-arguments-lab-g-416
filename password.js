let length = process.argv[2]
let amount = process.argv[3]

randomPasswords(length, amount)

function randomPasswords(length, amount) {

  let passwords = [];

  for (let i = 0; i < amount; i++) {
    let password = "";
    for (j = 0; j < length; j++) {
      password += Math.floor((Math.random() * 10)) 
    }
    passwords.push(password);
  }
  passwords.forEach(password => {
    console.log(password);
  })
}

process.exit();
