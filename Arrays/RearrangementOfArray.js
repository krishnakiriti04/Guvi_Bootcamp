// Getting input via STDIN

//Your task is to rearrange the numbers such that arr[i] becomes arr[arr[i]]


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
  var newarr = [];
  for(var i=0;i<len;i++)
  {
      newarr[i]=arr[arr[i]];
  }
    
  console.log(newarr.join(" "));
});

/*
Sample Input :
5
4 0 2 1 3

Sample Output :
3 4 2 0 1
