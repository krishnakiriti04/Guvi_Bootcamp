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
  var arr = userInput[1].split(" ").map(Number);
  var frequency = {};
  arr.forEach(function(value){frequency[value]=0;});
  var unique = arr.filter(value=>++frequency[value]===1);
  
  //console.log(frequency);     // { '1': 2, '2': 1, '3': 1 }
  
 // console.log(unique);          // [ 1, 3, 2 ]
  
  var sort = unique.sort(function(a,b){
      if(frequency[a]===frequency[b])
        return a-b;
      else
        return frequency[a]-frequency[b];
  })
  
  console.log(sort.join(" "));              //2 3 1
  
});


/*
Sample Input :
4
1 1 3 2

Sample Output :
2 3 1
*/
