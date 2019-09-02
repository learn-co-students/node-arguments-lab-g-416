let argv = process.argv

argv.shift()
argv.shift()

while (argv[1] > 0) {
  generatePassword()
  argv[1]--
}

function generatePassword() {
  let len = parseInt(argv[0])
  let pass = Math.random().toString(36)

  while (pass.length < len) {
    pass = pass.concat(Math.random().toString(36))
  }
  
  console.log(pass.slice(-len))
}

process.exit(0)
