import inquirer from "inquirer";

interface ansType {
    userID : string ,
    userPIN : number ,
    accountType : string ,
    transactionType : string ,
    Amount : number ,

}

const answers : ansType = await inquirer.prompt([
    {
        type : "input" ,
        name : "userID",
        message : "KINDLY ENTER YOUR ID"
    } ,
    {
        type : "input" ,
        name : "userPIN",
        message : "KINDLY ENTER YOUR PIN"
    } ,
    {
        type : "list",
        name : "accountType",
        choices : ["Current" , "Saving"] ,
        message : "SELECT YOUT ACCOUNT TYPE"
    } ,
    {
        type : "list",
        name : "transactionType",
        choices : ["Fast Cash" , "Withdraw"] ,
        message : "SELECT YOUR TRANSACTION TYPE",
        when(answers) {
            return answers.accountType
        } ,
    } ,
    {
        type : "list",
        name : "Amount",
        choices : [5000 , 10000 , 20000 , 30000] ,
        message : "SELECT YOUR AMOUNT",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        } ,
    } ,
    {
        type : "number",
        name : "Amount",
        message : "ENTER YOUR AMOUNT",
        when(answers) {
            return answers.transactionType == "Withdraw"
        } ,
    }
   
])

if (answers.userID && answers.userPIN) {
        const balance = Math.floor(Math.random()*100000)
        console.log(balance)
        const EnteredAmount = answers.Amount;
        if (balance >= EnteredAmount) {
            const remaining = balance - EnteredAmount;
                console.log("YOUR REMAINING BALANCE IS", remaining)
        } else {
            console.log("INSUFFICIENT BALANCE")
        }

}