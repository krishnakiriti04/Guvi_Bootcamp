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
  var len = parseInt(userInput[0]);
  var arr = userInput[1].split(" ").map(Number);
  
  var min=arr[0],max=arr[0];
  for(let i=0;i<len;i++)
  {
    if(arr[i]<min)
        min = arr[i];
    
    if(arr[i]>max)
        max = arr[i];
  }
  
  console.log(arr.indexOf(max)-arr.indexOf(min));
});

/*
Output Description:
Print the difference of indices of largest and smallest array

Sample Input :
5
1 6 4 0 3

Sample Output :
-2
*/
