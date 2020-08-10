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
  var num = userInput[0].split(" ");
  var SI = (+num[0] * +num[1] * +num[2])/100 ;
  console.log(SI.toFixed(2));

  //end-here
});
