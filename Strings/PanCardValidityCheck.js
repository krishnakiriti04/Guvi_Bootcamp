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
  var str = userInput[0];
  var res = [];
  for(let i=0;i<str.length;i++)
  {
    res = str.match(/\b([A-Z]{5})([1-9]{4})([A-Z]{1})/);
  }
  
  if(res===null)
    console.log('not pan');
  else if(res[0]===str)
    console.log('pan');
  else
    console.log('not pan');
  
});

/*

1)Pan must have uppercase letters only.

2)It must be of 10 character only

3)From index 1 to 5 all must be letters(A-Z),last index must be letter

4)Rest all must be integer Starting from 1

Sample Input :
HXTPS2142R

Sample Output :
pan

*/
