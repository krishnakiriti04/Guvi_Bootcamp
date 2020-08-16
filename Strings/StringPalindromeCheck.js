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
  var arr = userInput[0];
  var rev = arr.split("").reverse().join("");
  
  if(arr===rev)
    console.log(1);
  else
    console.log(0);  
});

/*
Print 1 if String is palindrome or 0 if not

Sample Input :
NITIN

Sample Output :
1
*/
