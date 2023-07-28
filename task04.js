const prompt = require('prompt-sync')();

function calculateGrade(){
    let marks = parseInt(prompt("Enter marks:"));
    let g;

    switch(true) {
        case (marks<60):
            g = 'F';
            break;
        case (marks>=60 && marks<=69):
            g = 'D';
            break;
        case (marks>=70 && marks<=79):
            g = 'C';
            break;
        case (marks>=80 && marks<=89):
            g = 'B';
            break;
        default:
            g = 'A';
            break;
    }

    return g;
}


let grade = calculateGrade();
console.log(grade);