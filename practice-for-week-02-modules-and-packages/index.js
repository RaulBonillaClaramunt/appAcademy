const colors = require('colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

const colors2 = require('colors/safe');

console.log(colors2.green('hello')); // outputs green text
console.log(colors2.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors2.inverse('inverse the color')); // inverses the color
console.log(colors2.rainbow('OMG Rainbows!')); // rainbow
console.log(colors2.trap('Run the trap')); // Drops the bass
