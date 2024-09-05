type NO = string | number; //union

function printId(id: NO) {

    // narrowing
    if(typeof id === 'string'){

        console.log(id.toUpperCase());
    }else{
        console.log(id);
        
    }
}

printId(3);




function getFirstThree(x: string | number[]){
    return x.slice(0,3);
}

console.log(getFirstThree("friend"));
console.log(getFirstThree([1,2,34,5,6]));


