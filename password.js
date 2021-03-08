function generatePassword(length) {
    let password = "",
        charset =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0, n = charset.length; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    return password;
}

process.argv.shift();
process.argv.shift();

const argv = process.argv;

if (!argv[0] || !argv[1]) {
    if (!argv[0]) {
        console.log(
            "Please provide first argument, length for generated passwords"
        );
    }
    if (!argv[1]) {
        console.log(
            "Please second argument, number of passwords to be generated"
        );
    }

    process.exit(1);
}

for (let i = 0; i < process.argv[1]; i++) {
    console.log(generatePassword(process.argv[0]));
}

process.exit(0);
