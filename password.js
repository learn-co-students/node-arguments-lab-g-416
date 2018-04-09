function generatePassword(length) {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let l = parseInt(length, 10);
  let retVal = '';

  for (let i = 0, n = charset.length; i < l; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(retVal);
  return retVal;
}

function createPassword(length, number) {
  let i = 0;
  while (i < number) {
    generatePassword(length);
    i++;
  }
}

module.exports = createPassword;