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
  
  var str = userInput[0];
  var sum = 0;
  
  for(let i=0;i<str.length;i++)
 {
    sum = sum + str.charCodeAt(i);
 }
console.log(sum);
});

/*
Sample Input :
abc

Sample Output :
294
*/
