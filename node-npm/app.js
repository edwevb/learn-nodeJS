const validator = require("validator");

const email = validator.isEmail("edward@gmail.com");

console.log(email);
