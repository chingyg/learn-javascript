function main2()
{
	//functions1(32243);
	//functions2("nurses run")
	//functions7("The quick brown fox");
	//functions8(1);
	//functions9
	functions11([1,2,3,3]);
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

/**
 * Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
 * @return {[type]} [description]
 */
function functions6(string)
{
	var words = string.split(" ");

	var index = [];
	var maxLength = 0;

	for(var i = 0; i < words.length; i++)
	{	
		//case when you have multiple words with maximum length
		if(words[i].length == maxLength)
		{
			index.push(i);
		}
		if(words[i].length > maxLength)
		{
			maxLength = words[i].length;

			//clear the array of indexes
			index = [];
			index.push(i);
		}

		
	}

	console.log("The longest word in: " + string + " are: ");
	for(var i = 0; i < index.length; i ++)
	{
		console.log(words[index[i]]);
	}
	
}

/**
 * Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 * @return {[type]} [description]
 */
function functions7(string)
{
	//number of vowels
	var count = 0;

	var vowels = "aeiou";

	for(var i = 0; i < string.length; i++)
	{
		if (vowels.indexOf(string[i].toLowerCase()) !== -1)
		{
			count++;
		}
	}

	console.log(string + " has " + count + " vowels");
}

/**
 * Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
 * @return {[type]} [description]
 */
function functions8(x)
{
	if(x % 2 == 0)
	{
		console.log("Not prime");
	}
	else if (Math.sqrt(x) % 1 == 0)
	{
		console.log("Not prime");
	}
	else if(x % 3 == 0)
	{
		console.log("Not prime");
	}
	else if(x % 5 == 0)
	{
		console.log("Not prime");
	}
	else if (x % 7 == 0)
	{
		console.log("Not prime");
	}
	else
	{
		console.log("Is prime");
	}


}

/**
 * Write a JavaScript function which accepts an argument and returns the type.
 * @return {[type]} [description]
 */
function functions9(arg)
{	
	console.log(arg.toString() + " type is: " + typeof arg);
}

/**
 * Write a JavaScript function which returns the n rows by n columns identity matrix
 */
function functions10(n)
{

	var array = new Array(n);
	var output = "";

	//create array of length n. this is creating the columns from left to right
	for(var i = 0; i < array.length; i ++)
	{
		// create the rows from top to bottom
		var tmp = new Array(n);
		for(var j = 0; j < tmp.length; j++)
		{
			if(j == i)
			{
				tmp[j] = 1;

			}
			else
			{
				tmp[j] = 0;
			}
			if (j != (n-1))
			{
				output += tmp[j] + ",";
			}
			else
			{
				output += tmp[j] + "\n";
			}
			
		}
		
		array[i] = tmp;
	}

	console.log(output);
}

/**
 * Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
 */
function functions11(array)
{
	

	function compareNumbers(a,b)
	{
		return a-b;
	}

	array.sort(compareNumbers);
	var secondGreatest = 0;
	var secondLowest = 0;
	if (array.length == 2)
	{
		secondLowest = array[0];
		secondGreatest = array[array.length - 1];		
	}
	else if(array.length > 2)
	{
		secondLowest = array[1];
		secondGreatest = array[array.length - 2];
	} 
	else
	{
		secondLowest = array[0];
		secondGreatest = array[0];
	}
	
	console.log(array.toString());
	console.log("second greatest is : " + secondGreatest + "\nsecond lowest is: " + secondLowest);

}
