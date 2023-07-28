const prompt = require('prompt-sync')();

let value = parseInt(prompt('Enter your ammount:'));

if(value < 50){
    console.log(`Discount = 00 And Total Amount + Discount amount = ${value}`);
}else if(value >= 50 && value < 100){
    discount(5,value);
}else if(value >= 100 && value < 200){
    discount(10,value);
}else{
    discount(15,value);
}


function discount(discountValue, value){

    discountAmount = value*(discountValue/100);
    console.log(`Discounted amount = ${discountAmount} And Total amount + discount amount = ${discountAmount + value}`);
}