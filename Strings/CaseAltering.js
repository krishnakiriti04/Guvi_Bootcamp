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
  var str = userInput[0].split(" ");
  var res = [];
  //console.log(str[0]);
  for(var i=0;i<str.length;i++)
  {
      if(i%2===0)
      {
          if(str[i].toUpperCase()===str[i])
              res.push(str[i].toLowerCase());
          else if(str[i].toLowerCase()===str[i])
              res.push(str[i].toUpperCase());
          else if(str[i][0].toUpperCase()===str[i][0])
            res.push(str[i].toUpperCase());
          else if(str[i][0].toLowerCase()===str[i][0])
              res.push(str[i].toLowerCase());
      }
      else
        res.push(str[i]);
  }
  
  console.log(res.join(" "));
});

/*
Sample Input :
abcd efgh ijkl

Sample Output :
ABCD efgh IJKL
*/
