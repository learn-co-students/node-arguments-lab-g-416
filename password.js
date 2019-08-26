function generatePassword(x) {
    var length = x,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
} 

function repeatPassword(y) {
    var i = 0;
while(i<y)
{
	generatePassword(process.argv[2]);
  i++;
} 

}


// console.log(generatePassword(process.argv[3])); 

repeatPassword(process.argv[3]); 

