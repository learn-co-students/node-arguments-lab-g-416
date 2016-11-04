var passwords = []
process.argv.shift()// code solution here
process.argv.shift()// code solution here

var password = function() {
  for (i = 0; i < process.argv[1]; i ++) {
    passwords.push(Math.round(Math.random(0,1) * Math.pow(10, process.argv[0])).toString(10.1))


  }
for (i = 0; i < passwords.length; i ++) {
  console.log(passwords[i])
}
}

password()
