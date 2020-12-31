function generatePassword(){
    const combinedChars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split("");
    const numsGenerated = [], passwordChars = [];
    
    for(let i = 0; i < process.argv[2]; i++){
        const randomNum = Math.floor(Math.random() * combinedChars.length);
        numsGenerated.push(randomNum);
    }

    numsGenerated.forEach(e => {
        passwordChars.push(combinedChars[e])
    });

    return passwordChars.join("");
}

(function runCheck(){
    if(process.argv.length <= 3){
        console.log("Please provide values o generate password");
    } else {
        for(i = 0; i < process.argv[3]; i++){
            console.log(generatePassword());
        }
    }
})();

process.exit(0)