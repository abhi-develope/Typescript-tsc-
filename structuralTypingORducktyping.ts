
interface ICredential {
    username: string;
    password: string;
}


function signup(credential: ICredential): boolean {
    console.log(credential);
    return true;
    
}

const customer = {
    username: "jond",
    password: "1234"
};

signup(customer);  // we cannot assign customer for ICredential but our function take as an argument without any warning or error this is called duck typing  in which any similar type of object is treated same datatype in ts 