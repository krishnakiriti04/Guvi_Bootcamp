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
  //var row1 = userInput[0].split(" ").map(Number);
  var len = parseInt(userInput[0]);
  //var marks = parseInt(row1[1])
  var arr = userInput[1].split(" ").map(Number);
  
  var temp = [];
  for(var i=0;i<len;i++)
  {
      if(i%2===0)
        temp.push(arr[i])
  }
  temp.sort();
  for(var j=0;j<len;j++)
  {
      if(j%2===0)
        arr[j]=temp[j/2];
  }
  
  console.log(arr.join(" "));
  
});

/*
Sample Input :
5
3 9 1 44 6

Sample Output :
1 9 3 44 6
*/
