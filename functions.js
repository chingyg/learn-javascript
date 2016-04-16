function main2()
{
	//functions1(32243);
	//functions2("nurses run")
	functions5("hello my name is ching");
}

/**
 * Write a JavaScript function that reverse a number.
 * @return {[type]} [description]
 */
function functions1(num)
{
	var reverse = "";
	var x = num;

	while (x > 0)
	{
		var temp = x % 10;
		reverse += temp;
		x = Math.floor(x / 10);
	}

	reverse =  parseInt(reverse);
	console.log("Reverse of " + num + ": " + reverse);

	// Solution
	var reverse2 = num.toString();
	reverse2 = (reverse2.split("").reverse().join(""));

	console.log("Reverse of " + num + " using split/reverse/join is: " + reverse2);
}

/**
 * Write a JavaScript function that checks whether a passed string is palindrome or not?
 * @return {[type]} [description]
 */
function functions2(string)
{
	//Need to check for spaces
	var reverse = string.split("\\s").reverse().join("");

	if (reverse == string)
	{
		console.log(string + " is a palindrome");

	}
	else
	{
		console.log(string + " is not a palindrome");
	}
}

/**
 *  Write a JavaScript function that generates all combinations of a string
 * @return {[type]} [description]
 */
function functions3(string)
{
	var result = "";

	for(var i = 0; i < string.length; i ++)
	{
		result += string[i] + ",";
		var previous = string[i];
		for(var j = i + 1; j < string.length; j++)
		{
			previous +=string[j];
			result += previous + ",";
		}
	}

	//gets rid of the last comma
	console.log(result.substring(0,result.length -1));
}

/**
 * Write a JavaScript function that returns a passed string with letters in alphabetical order.
 * @return {[type]} [description]
 */
function functions4 (string)
{
	var result = string.split("").sort().join("");
	console.log(string + " in alphabetical order is: " + result);
}

/**
 * Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
 * @return {[type]} [description]
 */
function functions5(string)
{
	var words = string.split(" ");

	// for every word
	for(var i = 0; i < words.length; i++)
	{
		var upper = words[i][0].toUpperCase();
		words[i] = upper + words[i].substring(1,words[i].length);
	}

	console.log(words.join(" "));
}