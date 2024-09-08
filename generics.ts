function logString(arg: string){
    console.log(arg);
    return arg; 
    
}

logString('hello');


function logNumber(arg: number){
    console.log(arg);
    return arg; 
    
}

logNumber(43);


function logArray(arg: any[]){
    console.log(arg);
    return arg; 
    
}

logArray([3,2,4]);

// unneccessary repeating the code in the above examples, to overcome this we use...

// function logAnything(arg: any){   // but we have to avoid this method(any) because we miss all type information in this method
//     console.log(arg);
//     return arg;  
    
// }

// logAnything(3)

// to overcome this we use the generics 


function logAnything<T>(arg: T){   
    console.log(arg);
    return arg;  
    
}

logAnything(["hi","hello", 4])


interface HashAge {
    age: number;
}

function getOldest(people: HashAge[]){
    return people.sort((a,b) => b.age - a.age)[0];
}

const people = [{age: 30}, {age:40}, {age:10}];

getOldest(people).age;


