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
  var arr = [];
  for(var i = 1 ; i<+userInput[0]+1;i++)
  {
      arr.push(i*9);
  }
  console.log(arr.join(' '));
});




