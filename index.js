const fs = require('fs');
const magicNumber = process.argv[2] || 17;

function displayArray(arr, joint) {
  console.log(arr.join(joint));
}

let file = fs.readFileSync('./lorem.txt', 'utf8');
file = file.split(' ');

file.splice(magicNumber);
displayArray(file, ' ');

console.log(`
USAGE: $ npm start <GIVE NUMBER>`);
