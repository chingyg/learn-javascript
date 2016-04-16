function main() {
	//console.log("Hello World!");
	//basic5("basic5Text");
	//basic6(2016);
	//basic10();
}

/*
 Write a JavaScript program to display the current day and time in the following format.

Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22
 */
function basic1() {
	var today = new Date();

	// Number of days of the week don't change. Use array here for n(1)
	var day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var meridiem = "AM"

	if (today.getHours() > 11) {
		meridiem = "PM";
	}
	if (today.getHours() === 11)
	{
		meridiem = "NOON"
	}

	console.log("Today is : " + day[today.getDay()]);
	console.log("Current time is: " + (today.getHours() % 12) + " " + meridiem + " : " + today.getMinutes() + " : " + today.getSeconds());

}

/**
 * [Write a JavaScript program to print(as in print out through a printer) the contents of the current window.]
 * @return {[type]} [description]
 */
function basic2()
{
	 window.print();
}

/**
 * Write a JavaScript program to get the current date.
 * Expected Output :
 * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
 * @return {[type]} [description]
 */
function basic3()
{
	var today = new Date();
	//console.log(today.toLocaleFormat('%A, %B, %e, %Y'));
	//
	var month = today.getMonth() + 1;
	var date = today.getDate();
	var year = today.getFullYear();

	if (date < 10)
	{
		date = "0" + date;
	}
	if (month < 10)
	{
		month = "0" + month;

	}

	console.log(month + "-" + date + "-" + year);
	console.log(month + "/" + date + "/" + year);

	console.log(date + "-" + month + "-" + year);
	console.log(date + "/" + month + "/" + year);

}

/**
 * Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 * @return {[type]} [description]
 */
function basic4()
{
	var a = 7/2;
	var c = 5
	var b = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
	var area = (7 * b) / 2
	console.log("Area of triangle: " + area);
}

/**
 * Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
 * @return {[type]} [description]
 */
function basic5(targetId)
{
	var element = document.getElementById(targetId);
	console.log(targetId);
	var textNode = element.childNodes[0];
	var original = textNode.data;

	setInterval(function ()
	{
		original = original[original.length-1] + original.substring(0,original.length -1);
	

		textNode.data = original;

	},100);

}

/**
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
 * @return {[type]} [description]
 */
function basic6 (someYear)
{
	var isLeapYear = function(someYear)
	{
		if (someYear % 4 === 0)
		{
			return "Yes";
		}
		else
		{
			return "No";
		}
	}

	console.log("The given year: " + someYear + "\nIs leap year? " + isLeapYear(someYear));

}

/**
 * Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050
 * @return {[type]} [description]
 */
function basic7 ()
{
	var startYear = 2014;
	var endYear = 2050;

	for(var i = startYear; i <= endYear; i++)
	{
		var date = new Date(i,0,1);
		if (date.getDay() === 0 )
		{
			console.log(i);
		}
	}

	// if (startYear > 1999 && startYear < 3000)
	// {
	// 	startYear = (startYear % 2000);
	// }
	// if (endYear > 1999 && endYear < 3000)
	// {
	// 	endYear = (endYear % 2000);
	// }




	// var monthCode = [6,2,2,5,0,3,5,1,4,6,2,4];
	// var day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	

	// for(var i = startYear; i <= endYear; i++)
	// {
	// 	console.log("i: " + i);
	

	// 	// Month is always Janurary
	// 	// Date is always the first
	// 	var resultDate = monthCode[0] + 1 + (i % 7);

	// 	console.log("resultDate: " + resultDate);
	// 	if (resultDate > 7)
	// 	{
	// 		resultDate = resultDate % 7;
	// 	}

	// 	if (resultDate === 0)
	// 	{
	// 		console.log(i);
	// 	}
	// }
}

/**
 * Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
 * @return {[type]} [description]
 */
function basic8 ()
{
	var min = 1;
	var max = 10;
	var random = Math.floor(Math.random() * (max - min)) + min ;

	var guess = parseInt(prompt("Guess an integer from 1 - 10"));

	console.log("random: " + random + "\nguess is: " + guess);
	if (guess === random)
	{
		console.log("Good Work");

	}
	else
	{
		console.log("Not matched");
	}
}

/**
 * Write a JavaScript program to calculate days left until next Christmas.
 * @return {[type]} [description]
 */
function basic9 ()
{
	var today = new Date();
	
	// new Date(year, month, date)
	var christmas = new Date(today.getFullYear(),11,25);
	//var nextChristmasYear = today.getFullYear();
	if (today.getMonth() == 11 && today.getDate() > 24)
	{
		christmas.setFullYear(christmas.getFullYear() + 1)
		//nextChristmasYear = today.getFullYear() + 1;
		//console.log("year + 1");
	}


	var begin = today.getTime();
	var end = christmas.getTime();

	var difference = end - begin;

	// console.log("now: " + begin);
	// console.log("end: " + end);
	var conversion = Math.floor(difference/1000/60/60/24);
	console.log(conversion + " days until christmas!");
}

/**
 * Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
 * @return {[type]} [description]
 */
function basic10(operation)
{
	var firstNum = document.getElementById("b10-firstNumber").value;
	var secondNum = document.getElementById("b10-secondNumber").value;

	switch (operation)
	{
		case "multi":
			var product = firstNum * secondNum;
			console.log(firstNum + " * " + secondNum + " = " + product);
			break;
		case "div":
			var quotient = firstNum / secondNum;
			console.log(firstNum + " * " + secondNum + " = " + quotient);
			break;
		default:
			break;
	}


	// var multiplyButton = document.getElementById("b10-multiply");
	// multiplyButton.addEventListener("click",function() {
	// 	console.log("multiply clicked");
	// 	var firstNum = document.getElementById("b10-firstNumber").value;
	// 	var secondNum = document.getElementById("b10-secondNumber").value;

	// 	var product = firstNum * secondNum;
	// 	console.log(firstNum + " * " + secondNum + " = " + product);

	// });

	// 	var divideButton = document.getElementById("b10-divide");
	// 	divideButton.addEventListener("click",function() {
	// 	console.log("divide clicked");
	// 	var firstNum = document.getElementById("b10-firstNumber").value;
	// 	var secondNum = document.getElementById("b10-secondNumber").value;

	// 	var quotient = firstNum / secondNum;
	// 	console.log(firstNum + " / " + secondNum + " = " + quotient);

	// });
}

/**
 * Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 * [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ] 
 * @return {[type]} [description]
 */
function basic11() {

 	var f = prompt("Enter temperature in Fahrenheit");

 	var c = prompt("Enter temperature in Celsius");

 	var conversion1 = (f - 32)/9*5;

 	var conversion2 = (c/5*9)+ 32;

 	console.log(f + " fahrenheit to celsius: " + conversion1);
 	console.log(c + " celsius to fahrenheit: " + conversion2);
}

/**
 * Write a JavaScript program to get the website URL (loading page)
 * @return {[type]} [description]
 */
function basic12() {
	var url = document.URL;
	console.log("URL: " + url);

}