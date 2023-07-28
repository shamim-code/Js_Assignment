
let givenArray = [12, 34, 45, 23, 6, 78, 54, 90];


let filteredArray = givenArray.filter(function (item) {
    return item%2 == 0;
});


console.log(`FilteredArray: ${filteredArray}`);