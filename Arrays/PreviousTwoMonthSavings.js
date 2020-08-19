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
  var num = parseInt(userInput[0]);
  
  console.log(savings(num));
});


function savings(n)
{
    var initial = 1000;
    var firstmonth = 1000;
    
    if(n===0)
        return initial;
    else if(n==1)
        return initial+firstmonth;
    else
        return initial+savings(n-1)+savings(n-2);
}


/*
Input:  
3               for input 2 we get 4000 as output  
output:
7000                // 1000+1000+2000+3000;
*/
