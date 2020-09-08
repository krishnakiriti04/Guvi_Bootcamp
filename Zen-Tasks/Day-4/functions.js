//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array 
	/*
	(function(arr){
		var odds = [];
		for(let i=0;i<arr.length;i++)
		{
			if(arr[i]%2!==0)
				odds.push(arr[i]);
		}
	//	console.log(odds);
	}

		)([2,3,4,5,6,7,8]) 
	*/


//Convert all the strings to title caps in a string array
	/* 
	var titlecase = function(str){
		for(let i=0;i<str.length;i++)
		{
			str[i] = str[i][0].toUpperCase()+str[i].slice(1).toLowerCase();
		}
		//console.log(str.join(" "));
	}


	var strarr = ["This","is","a","sample","string"];

	titlecase(strarr)
	*/

//Sum of all numbers in an array
	(function(arr){
		var sum=0;
		for(let i=0;i<arr.length;i++)
		{
			sum = sum + arr[i];
		}
		//console.log(sum);
	})([10,20,34,56,78,94])


//Return all the prime numbers in an array

	var primearr = [3,5,7,11,34,54,98,71,91,101]

	var prime = function(arr){
		var temp = arr.filter((val)=>{
			var count = 0;
			for(let i=1;i<=val;i++)
			{
				if(val%i===0)
					count++;
			}
			return count===2;
		})
	//	console.log(temp);
	}

	prime(primearr);


//Return all the palindromes in an array
/*	var palarr = ["madam","kiriti","nitin","pen","sinis"]

	var palindrome = function(str){
		var arr = str.filter((val)=>{
			return val.split("").reverse().join("")===val;
		})
		console.log(arr)
	}

	palindrome(palarr)*/
//Return median of two sorted arrays of same size 

	(function(arr1,arr2){
		var temp = arr1.concat(arr2);
		var sum = temp.reduce((acc,curr)=>{
			acc = acc + curr;
			return acc;
		})
		//console.log(sum/temp.length)

	})([40,50,60],[100,200,300])

//Remove duplicates from an array
	var duparr = [2,3,3,3,4,4,4,6,5,4,6,2,7,8];

	function removedup(arr){
		var dup = arr.filter((val,index,self)=>self.indexOf(val)===index)
		//console.log(dup);

	}

	removedup(duparr);
//Rotate an array by k times and return the rotated array

	var k = 2;
	var rotarr = [7,3,12,9,2,5];

	function rotate(arr,k){
		for(let i=0;i<k;i++)
		{
			arr.unshift(arr.pop());
		}
		//console.log(arr);
	}

	rotate(rotarr,k)
