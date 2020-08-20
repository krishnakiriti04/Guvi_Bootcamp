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
  var arr = userInput[0];//.split("").map(Number);
  
  var re = arr.replace(/([0-9])\1+/,"");
  
  console.log(re);
});

/*
Sample Input :
1331

Sample Output :
11
*/
