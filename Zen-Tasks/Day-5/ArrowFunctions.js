//Do the below programs in arrow functions
//Print odd numbers in an array 
	
	var num = [10,23,45,56,73,26];

	console.log(num.filter((val)=>(val%2)!==0))
//Convert all the strings to title caps in a string array
	
	var str = ["This","is","a","sample","string"];

	console.log(str.map((val)=>{
		return val[0].toUpperCase() + val.slice(1).toLowerCase() ;
	}))
//Sum of all numbers in an array
	
	var sumarr = [10,23,45,56,73,26];	

	var sum = sumarr.reduce((acc,cur)=>{
		acc = acc+cur;
		return acc;
	})

	console.log(sum);
//Return all the prime numbers in an array
	
		var primearr = [10,23,3,5,45,56,73,26,11,91,107];	

		var primes = primearr.filter((val)=>{
			var count = 0;
			for(let i=1;i<=val;i++)
			{
				if(val%i===0)
					count++
			}
			return count===2;
		})
		console.log(primes.sort((a,b)=>a-b))

//Return all the palindromes in an array 

		var palarr = ["madam","nitin","krish","rookie","ABCDCBA","ABCDA"]

		var palindromes = palarr.filter((val)=>val.split("").reverse().join("")===val)

		console.log(palindromes);