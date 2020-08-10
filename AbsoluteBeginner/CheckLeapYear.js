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
  if(userInput[0] % 400 ===0)
    console.log("Y");
  else if(userInput[0] % 100 ===0)
    console.log("N");
  else if(userInput[0] % 4 ===0)
    console.log('Y');
  else
    console.log('N');

//end-here
});







