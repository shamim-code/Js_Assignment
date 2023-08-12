function mergeArrays (a,b){
    return [...a,...b];
}


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


console.log(mergeArrays(arr1,arr2));