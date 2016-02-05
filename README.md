# Node Arguments Lab

In this lab, you will pass and access command-line arguments when working with Node.

## Objectives

1. Implement a Node script that takes CLI arguments and prints them back
2. Use two arguments

## Introduction

Knowing how to pass and access command-line arguments is important in building CLI tools or small programs like the program which gives a random password.

![](password.png)

## Instructions

1. Implement a Node script `password.js` which takes CLI arguments and prints random passwords based on the arguments
2. Use two arguments: length (first) and a number of passwords (second) to return so that `node password 2 2` and `node password 10 3` are valid commands
3. Use `generatePassword()` function in the `password.js` to get random passwords, or write your own method
4. Finish program with `process.exit(0)`
5. Run `$ npm test` to test


### Extra Info

The password generator function:

```js
var generatePassword = function generatePassword(length, charset) {
    var length = length || 8,
        charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        password = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n))
    }
    return password
}
```

* [JavaScript password generator on Stackoverflow](http://stackoverflow.com/questions/1497481/javascript-password-generator)
* [Password generator module](https://github.com/bermi/password-generator)

