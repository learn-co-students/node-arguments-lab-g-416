// code solution here

  var length = process.argv[2];
  var amount = process.argv[3];

  if (process.argv.length < 4) {
    console.log("Wrong number of arguments");
  } else if (!parseInt(length) || !parseInt(amount)) {
    console.log("You must pass in numbers")
  } else {
    for (let i = 0; i < amount; i++) {
      console.log(generatePassword(length))
    }
  }




  function generatePassword(length) {
    var charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var password = '';
    for (let i = 0; i < length; i++) {
      password+= charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return password;
  }

  
