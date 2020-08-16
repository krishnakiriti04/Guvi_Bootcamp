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
  var arr = userInput[0];
  var flag = 0;
  //--------------------------Method-1--------------------------
 /* for(var i = 0 ;i<arr.length;i++)
  {
    if(arr[i].toLowerCase() === 'a'||
        arr[i].toLowerCase() ==='e'||
        arr[i].toLowerCase() ==='i'||
        arr[i].toLowerCase() ==='o'||
        arr[i].toLowerCase() ==='u')
        flag = 1;
  }
  */
  //-----------------Method-2-------------------------
  var vowels = "aeiou";
  for(var i=0;i<arr.length;i++)
  {
      for(var j=0;j<vowels.length;j++)
      {
          if(arr[i]===vowels[j])
            flag = 1;
      }
  }
  (flag===1)?console.log("yes"):console.log("no");
  
});

