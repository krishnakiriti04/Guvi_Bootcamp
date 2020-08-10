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
  var result = 0.25 * Math.pow(3,0.5) * Math.pow(userInput[0],2);
  console.log(result.toFixed(2));   // upto 2 decimal places

  //end-here
});
