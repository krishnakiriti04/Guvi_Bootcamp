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
  var row1 = userInput[0].split(" ").map(Number);
  var len = parseInt(row1[0]);
  var marks = parseInt(row1[1])
  var arr = userInput[1].split(" ").map(Number);
  
  var flag = 0;
  for(var i=0;i<len;i++)
  {
      if(arr[i]==marks)
        flag = i;
  }
  
  flag!==0?console.log(flag):console.log(-1);
  
});

/*
Input
5 10
1 2 9 5 10

Output
4             //10 is matched at index 4 of array so answer is 4
*/
