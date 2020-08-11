// Getting input via STDIN
var sum = 0;


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
  var arrlen = parseInt(userInput[0]);
  var inputarray = userInput[1].split(" ").map(Number);
  
  for(var i=0;i<arrlen;i++)
  {
      sum = sum + inputarray[i];
  }

    if((sum%2===0)&&(sum%3===0)&&(sum%5===0))
        console.log(1);
    else
        console.log(0);
  //end-here
});


/*
Sample Input :
5
5 25 35 -5 30
Sample Output :
1
*/
