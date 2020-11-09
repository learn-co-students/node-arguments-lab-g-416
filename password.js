let generatePassword = function generatePassword(x) { 
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.x; i < x; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

process.argv.shift()
process.argv.shift()

for (let i = 0; i < process.argv[0]; i++) {
  console.log(generatePassword(process.argv[0]))
}




process.exit(0)


// let passwords = []



// process.argv.map(function summarize(item, index, list) {
//   // passwords.push(generatePassword(item[0]))

//   console.log(list.length)
//   for (let i = 0; i < list.length; i++ )
//   console.log('titty')
// })



// console.log(passwords)

// console.log(generatePassword(process.argv))

// process.exit(0)

