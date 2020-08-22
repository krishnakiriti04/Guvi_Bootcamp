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
  var str = userInput[0].split("");
  
 var res = str.filter((value)=>{
      value = value.toLowerCase();
      return (value!=='a'&&value!=='e'&&value!=='i'&&value!=='o'&&value!=='u');
  });
  
  console.log(res.join(""));
});

/*
Sample Input :
I am shrey 

Sample Output :
 m shry
 */
