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
  let arrlen = parseInt(userInput[0]);
  let windowsize = parseInt(userInput[2]);
  let inputarray = userInput[1].split(" ").map(Number);
  let result = [];
  for(var i = 0; i<=arrlen-windowsize;i++)
  {
      var temparr = [];
      
      for(var j=i; j<windowsize+i;j++)
      {
          if(inputarray[j]<0)
          {
            result.push(inputarray[j]);
            break;
          }
          else
            temparr.push(inputarray[j]);
      }
      if(temparr.length===3)
        result.push(0);
  }
  
  console.log(result.join(" "));

  //end-here
});


/*
Output Description:
Print the first negative integer in that window.If all the numbers are positive print 0

Sample Input :
7
1 -2 -3 -4 5 6 -7
3
Sample Output :
-2 -2 -3 -4 -7
*/







