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
    let n = userInput[0];
    let arr = userInput[1].split(" ").map(Number);
    
    let result = arr.sort((a,b)=>b-a).sort((a,b)=> compareElements(a,b) ? b-a : a-b).join("");
    console.log(result);
});

function compareElements(m,n){
    let mn = m.toString() + n.toString();
    let nm = n.toString() + m.toString();
    
    return Number(mn) > Number(nm) ? 1 : 0;
}

/*
Input 
4
54 546 548 60

Ouput
6054854654
*/
