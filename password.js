  let pwdLength = parseInt(process.argv[2])
  let amt = parseInt(process.argv[3])

  function generatePassword(pwdLength){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i=0; i < pwdLength; i++ ){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  for (let i =0; i < amt; i++) {
    console.log(generatePassword(pwdLength))
  }  

process.exit(0)

// function generatePassword(length) {
//     var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retVal = "";
//       for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

//  var length = process.argv[2];
//  var amount = process.argv[3];

//  for (var i = 0; i < amount; i++) {
//   console.log(generatePassword(length))
//  }