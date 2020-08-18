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
  //start-here
  //Your code goes here … replace the below line with your code logic
  var num = userInput[0].split("").map(Number);
  
  var res = num.filter((value)=>value%2!==0)
  
  if(res.length===0)
    console.log(-1);
  else
    console.log(res.join(" "));
});

/*
INPUT
2143

OUTPUT
1 3
*/
