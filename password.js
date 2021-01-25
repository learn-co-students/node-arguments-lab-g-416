const args = process.argv
function password(len, num) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_*&%$!";
  
  
  for (let i = 0; i < num; i++) {
    let retVal = "";
    for (let j = 0, n = charset.length; j < len; j++) {
      retVal += charset.charAt(Math.floor(Math.random() * n ));  
    }
    console.log(retVal);
  }
} 

password(args[2], args[3]);