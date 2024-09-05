 type User = {
    name : string;
    age : number;
    address?: string;  // ? for optional feild
 }

 const user: User = {
    name: "abhishek",
    age: 12,
    address: "ram nager"
 }




 function login(userData: User): User {  //set function return type
    return userData;
 }






 console.log(login(user));  // argument must be pass



 type ID = number | string;  // one or more option

 const userId: ID = 23  
 