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
  var arr1 = userInput[1].split(" ").map(Number);
  var arr2 = userInput[2].split(" ").map(Number);
  
  var arr = arr1.concat(arr2).sort((a,b)=>a-b);
  let mid = parseInt(arr.length/2);
  console.log(arr[mid]+arr[mid-1]);  
});

/*
Output Description:
Print the sum of two middle elements

Sample Input :
5
1 9 16 25 46
2 3 4 5 6

Sample Output :
11
*/
