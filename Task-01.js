function printObjectProperties(obj){


    if(Object.keys(obj).length == 0){
        console.log("Object is empty.");
    }else {
        for(let i in obj){
            console.log(i + ": " + obj[i]);
        }
    }


}


const person = {
    name: "Shamim Al Mamun",
    age: 23,
    hair: "black",
    profession: "Student"
}


printObjectProperties(person);
