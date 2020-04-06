// Start by creating a variable `message`
var name = "Jorge";
var nameTrim = name.trim();
var nameLength = name.length;


console.log("Hello World")
console.log(name)
console.log(nameLength)

var nameLowerCase = name.toLowerCase();
console.log(nameLowerCase)
var greetings = " My name is "
var result = greetings + name + " and my name is " + nameLength + " characters long ";

var result1 = greetings + nameTrim + " and my name is " + nameLength + " characters long ";

console.log(result)
console.log(result1)