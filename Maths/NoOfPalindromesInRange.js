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
  var n = parseInt(userInput[0]);
  var count = 0;
  for(var i=1;i<n+1;i++)
  {
   count = count + reverse(i); 
  }
  console.log(count);

  //end-here
});


function reverse(i)
{
    var rem = 0;
    var num = i;
    while(num>0)
    {
      rem = (rem * 10) + (num%10);
      num = parseInt(num/10);
    }  
    return (rem===i)?1:0;
}

/*
Print the count of all palindromic numbers till ‘n’(inclusive)

Sample Input :
5
Sample Output :
5
*/
