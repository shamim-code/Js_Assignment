function findMaxNumber (array){
    let max;
    if(array.length == 0 ) return null;
    else{


        max = array[0];
        for(let i = 1; i < array.length; i++){
            if(array[i] > max){
                max = array[i];
            }
        }
    }


    return max;
}


const numbers = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers));
