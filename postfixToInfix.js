// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const postfix = userInput[0];
  const infix = postfixToInfix(postfix);
  infix ? console.log(infix) : console.log("Error");
});

function isOperator(char){
    let operators = ['+','-','*','/','^',')','('];
    return  operators.includes(char) ? true : false ;
}

function isOperand(char){
    return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <='Z')) ? true : false ;
}

function postfixToInfix(postfix){
    let result = [];
    for(let i=0; i<postfix.length;i++){
        if(!isOperator(postfix[i]) && isOperand(postfix[i])){
            result.push(postfix[i]);
        }else if(isOperator(postfix[i]) && !isOperand(postfix[i])){
            let op2 = result[result.length - 1];
            result.pop();
            let op1 = result[result.length - 1];
            result.pop();
            let expr = `(${op1}${postfix[i]}${op2})`
            result.push(expr);
        }else{
            return '';
        }
    }
    return result.join("");
}
