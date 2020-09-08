
//------problem-1-------------
/*
function addFive(num)
{
	console.log(num+5);
}

addFive(5);
addFive(0);
addFive(-5);
*/

//------problem-2-------------
/*
function getOpposite(num){
	if(typeof(num)==="number" && (num%1)===0)
	{
		if(num===0)
			console.log(num);
		else if(num<0)
			console.log(-num);
		else if(num>0)
			console.log(-num);
	}
	else
	{
		console.log(-1);
	}
}

getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5);
*/

//------problem-3-------------
/*
function toSeconds(min) {
	console.log(min*60);
}

toSeconds(5);
toSeconds(3);
toSeconds(2);
*/

//------problem-4-------------
/*
function toInteger(mystr) {
	console.log(parseInt(mystr));
}

toInteger("6");
toInteger("1000");
toInteger("12");
*/

//------problem-5-------------
/*
function nextNumber(myint) {
	console.log(myint+1);
}

nextNumber(0);
nextNumber(9);
nextNumber(-3);
*/

//------problem-6-------------
/*
function getFirstElement(arr) {
	return arr[0];
}
var data = getFirstElement([1,2,3])
console.log(data);
data = getFirstElement([80,5,100])
console.log(data);
data = getFirstElement([-500,0,50])
console.log(data);
*/

//------problem-7-------------
/*
function hourToSeconds(arr) {
	return arr*60*60;
}

var data = hourToSeconds(2)
console.log(data)
data = hourToSeconds(10)
console.log(data)
data = hourToSeconds(24)
console.log(data)
*/

//------problem-8-------------
/*
function findPerimeter(num1,num2) {
	return 2*(num1+num2);
}
var peri = findPerimeter(6,7)
console.log(peri)
peri = findPerimeter(20,10)
console.log(peri)
peri = findPerimeter(2,9)
console.log(peri)
*/

//------problem-9-------------
/*
function lessThan100(num1,num2) {
	return num1+num2 <100
}
var res = lessThan100(22,15)
console.log(res);
res = lessThan100(83,34)
console.log(res);
*/

//------problem-10-------------
/*
function remainder(num1,num2) {
	return (num1%num2);
}
var res = remainder(1,3)
console.log(res)
res = remainder(3,4)
console.log(res)
res = remainder(-9,45)
console.log(res)
res = remainder(5,5)
console.log(res)
*/

//------problem-11-------------
/*
function CountAnimals(tur,horse,pigs) {
	return (tur*2 + horse * 4 + pigs*4);
}
var legs = CountAnimals(2,3,5) //36
console.log(legs);
legs = CountAnimals(1, 2, 3) // 22
console.log(legs);
legs=CountAnimals(5, 2, 8) //50
console.log(legs);
*/

//------problem-12-------------
/*
function frames(num1,num2) {
	return 60*num1*num2;

}

var fps = frames(1,1) //60
console.log(fps);
fps = frames(10,1) //600
console.log(fps);
fps = frames(10,25) //15000
console.log(fps);
fps = frames(1,2)  //120
console.log(fps);
*/

//------problem-13-------------
/*
function divisibleByFive(num1) {
	return num1%5===0;
}

var divisible = divisibleByFive(5)
console.log(divisible);
divisible = divisibleByFive(-55)
console.log(divisible);
divisible = divisibleByFive(37)
console.log(divisible);
*/

//------problem-14-------------
/*
function isEven(num){
	if(typeof num === 'number')
		return num%2===0;
	else
		return -1;
}
var even = isEven(12)
console.log(even)
even = isEven(0)
console.log(even)
even = isEven(11)
console.log(even)
even = isEven("11h")
console.log(even)
*/

//------problem-15-------------
/*
function areBothOdd(num1, num2){
	return (num1%2!==0 && num2%2!==0)
}

console.log(areBothOdd(1, 3));
console.log(areBothOdd(2,3));
console.log(areBothOdd(0,0));
*/

//------problem-16-------------
/*
function getFullName(firstName, lastName){
	return firstName+" "+lastName;
}

console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI",""));
console.log(getFullName("", "GEEK"));
console.log(getFullName("", ""));
*/

//------problem-17-------------
/*
function getLengthOfWord(word1){
	if(typeof word1==='string')
 		return word1.length;
 	else
 		return -1;
}

console.log(getLengthOfWord("GUVI"))
console.log(getLengthOfWord(""))
console.log(getLengthOfWord())
console.log(getLengthOfWord(9))
*/

//------problem-18-------------
/*
function isSameLength(word1, word2){

	if(typeof word1 ==='string' && typeof word2==='string')
		return word1.length === word2.length;
	else
		return -1;

}
console.log(isSameLength("GUVI","GEEK")) //true
console.log(isSameLength("GUVI",10)) //-1
*/

//------problem-19-------------
/*
function getDistance(x1, y1, x2, y2){
	return (x2-x1)+(y2-y1);
}

console.log(getDistance(100, 100, 400, 300));
*/

//------problem-20-------------
/*
function getNthElement(array,n){
 	return array[n];
}

console.log(getNthElement([1, 3, 5], 1));
*/

//------problem-21-------------
/*
function getLastElement(array){
  return array[array.length-1]
}

console.log(getLastElement([1,2,3,4]));
*/

//------problem-22-------------
/*
var obj = {
 "mykey": "value"
};

function getProperty(obj, key) {
  return obj[key];
}

console.log(getProperty(obj,'mykey'));
console.log(getProperty(obj,'dummykey'));
*/

//------problem-23-------------
/*
var obj = {
 
};
function addProperty(obj, key){
 // your code here
 obj[key]=true;
 return obj;
}

console.log(addProperty(obj,"mykey"));
*/


//------problem-24-------------
/*
var obj = {
 "mykey":"value",
 "mykey2" : "value2",
 "mykey3" : "value3"
};

function removeProperty(obj, key){
 delete obj[key];
 return obj;
}

console.log(removeProperty(obj,"mykey"));
*/

//------problem-25-------------
/*
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
	 var temp = [0,0];
	 for(let i=0;i<arr.length;i++)
	 {
	 	if(arr[i]>=0)
	 		temp[0]++;
	 	else
	 		temp[1]= temp[1]+ arr[i];
	 }
	 return temp
}
var ar2 = countPositivesSumNegatives(arr);
console.log(ar2);
*/

//------problem-26-------------
/*
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function getPositives(arr)
{
	var temp=[];
 	// your code here
 	for(let i=0;i<arr.length;i++)
 	{
 		if(arr[i]>=0)
 			temp.push(arr[i]);
 	}
 	return temp;
}

var ar2 = getPositives(ar);
console.log(ar2);
*/

//------problem-27-------------
/*
function powersOfTwo(n){
	var temp = [];
	for(let i=0;i<=n;i++)  
	{
		temp.push(Math.pow(2,i))
	}
	return temp.join(",");
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(6));
*/

//------problem-28-------------
/*
function findMax(ar)
{
	// your code here
	let high = ar[0];
	for(let i=1;i<ar.length;i++)
	{
		if(ar[i]>high)
			high = ar[i]
	}
	return high;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
*/


//------problem-29-------------
/*
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes){
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
	 if (isPrime(i))
	 {
		 console.log(n, "→", i);
		 n++;
	 }
	 
	 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
	let count = 0;
	for(let i=1;i<=n;i++)
	{
		if(n%i===0)
			count++;
	}
	return count===2;
}
*/

//------problem-30-------------

/*
function getPrimes(nPrimes, startAt)
{
// your code here
var arr =[];

for(let i=1;arr.length!=nPrimes;i++)
{
	if(isPrime(i) && i>startAt)
		arr.push(i)
}

return arr;
	
}
// Returns true if a number is prime
function isPrime(n)
{
 let count = 0;
	for(let i=1;i<=n;i++)
	{
		if(n%i===0)
			count++;
	}
	return count===2;
}


console.log(getPrimes(10, 100));
*/

//------problem-31-------------
/*
function reverseString(s)
{
   return s.split("").reverse().join("");
}

var s = reverseString("JavaScript");
console.log(s);
*/

//------problem-32-------------
/*
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(let el of ar2)
 {
 result.push(el);
 }
 //Some piece of code goes here 
 
 return result;
}
*/

//------problem-33-------------
/*
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  // your code here
  return s.split(",").map(Number).reduce((cur,sum)=>cur+sum,0);
}
*/