const prompt = require('prompt-sync')();

let value = parseInt(prompt("Generate Multiplication Table for:"));

for( let i = 1; i <= 10; i++ ){
    console.log(`${i} x ${value} = ${i*value} \n`);
}