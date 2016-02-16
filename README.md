# Node Arguments Lab

In this lab, you will pass and access command-line arguments when working with Node.

## Objectives

1. Implement a Node script that takes CLI arguments and prints them back
1. Use two arguments

## Introduction

I'm sure we all know those people that use the same password over and over again for all their online logins. That's obviously not safe because if someone hacks into one account, they can easily get into all of them. Your job is to build a CLI application that generates a random secure password. In order to generate the appropriate amount amount of passwords (sometimes you need two passwords!) with the appropriate number of characters, this application should accept two command-line arguments.

![](password.png)

## Instructions

1. Implement a Node script `password.js` which takes CLI arguments and prints random passwords based on the arguments
1. Use two arguments: length (first) and a number of passwords (second) to return so that `node password 2 2` and `node password 10 3` are valid commands
2. Use `generatePassword()` function in the `password.js` to get random passwords, or write your own method
3. Finish program with `process.exit(0)`
1. Run `$ npm test` to test


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
