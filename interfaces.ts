
// interfaces:- in simple word its act like a contract to assign somewhere in the code


interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[];
}

const transaction1: Transaction = {
    payerAccountNumber: 1234,
    payeeAccountNumber: 555,
}

const transaction2: Transaction = {
    payerAccountNumber: 1234,
    payeeAccountNumber: 555,
}



const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: "jon doe",
    balance: 3000,
    isActive: true,
    transactions: [transaction1, transaction2],
}