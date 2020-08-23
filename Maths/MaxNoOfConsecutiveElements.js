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
  //var n = parseInt(userInput[0]);
  var arr = userInput[0].split("").map(Number);
  var count = 1;
  var max = 0;
  
  for(let i=0;i<arr.length-1;i++)
  {
      
      if(arr[i]===1)
      {
          if(arr[i]===arr[i+1])
            count++;
          else
          {
            count = 1;      
          }
      }
      if(count>(max))
        max = count;
      
  }
  //============================     METHOD-2      ============================
 /* 
  arr.forEach((val)=>{
      if(val===1)
      {
          count++;
      }
      else
        count = 0;
        
    if(count>max)
        max = count;
  })*/
  
  max>1?console.log(max):console.log(-1);

});

/*
Sample Input :
101011111

Sample Output :
5
*/
