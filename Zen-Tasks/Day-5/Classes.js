//------------------------Calculator----------------------

class calculator{
	constructor(){
	}

	add(num1,num2)
	{
		console.log(num1+num2);
	}
	sub(num1,num2)
	{
		console.log(Math.absolute(num1-num2));
	}
	mul(num1,num2)
	{
		console.log(num1*num2);
	}
}



var c = new calculator();
//c.add(10,20)



//------------------------Movie----------------------

class Movie{
	constructor(title,studio,rating="PG"){
		this.title = title;
		this.studio = studio;
		this.rating = rating;
	}

	getPG(arr)
	{
		return arr.filter((val)=>val.rating==="PG");
	}
}


var movie1 = new Movie("Manam","Annapurna","A");
var movie2 = new Movie("Darling","Ramanaidu","U")
var movie3 = new Movie("Inside Out","Pixer")
var movie4 = new Movie("Ready Player One","Disney")


var moviearr = [movie1,movie2,movie3,movie4];

var hmovie = new Movie("Casino Royale","Eon Productions","PG13")


//console.log(hmovie.getPG(moviearr));


//------------------------Movie----------------------

class Circle{
	constructor(radius=1.0, color="Red")
	{
		this.radius = radius;
		this.color = color;
	}

	getRadius(){
		return this.radius;
	}

	getColor(){
		return this.color;
	}

	setRadius(num)
	{
		this.radius = num;
	}

	setColor(col){
		this.color = col;
	}

	getArea()
	{
		return Math.pow(this.radius,2).toFixed(2);
	}

	toString()
	{

	}

}


var circle = new Circle(5.4,"blue");


console.log(circle.getArea());
console.log(circle.getColor());
