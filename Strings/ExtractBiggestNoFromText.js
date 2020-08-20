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
  var str = userInput[0];
  var re = str.replace(/\D+/g," ")
            .trim()
            .split(" ")
            .map(Number)
            .sort((a,b)=>b-a);

  console.log(re[0]);

  //end-here
});

/*
Sample Input :
 I was born on 12 october 1998.
 
Sample Output :
1998
*/
