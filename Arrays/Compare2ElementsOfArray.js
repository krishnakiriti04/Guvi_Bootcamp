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
  var data = userInput[0].split(" ").map(Number);
  var arrlen = data[0];
  var m = data[1];
  var inputarray = userInput[1].split(" ").map(Number);
  
  var result = [];
  for(var i = 0;i<arrlen;i++)
  {
    if(Math.abs(inputarray[i]-inputarray[(i+1)%arrlen]) > m)
        result.push(1);
    else
        result.push(0);
  }

    console.log(result.join(" "));
  //end-here
});





/*
Print 1 if the difference is greater than ‘m’.

Sample Input :
5 15
50 65 85 98 35
Sample Output :
0 1 0 1 0
*/
