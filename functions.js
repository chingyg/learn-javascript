function main2()
{
	//functions1(32243);
	//functions2("nurses run")
	//functions7("The quick brown fox");
	//functions8(1);
	//functions13(12);
	//functions9
	// functions14(7,[10,5,25,1]);
	//functions16("thequickbrownfoxjumpsoverthelazydog");
	//functions17("ching chen aaaa bbb cc");
	//functions18(["a","b","c","d","e","f","g","h","i","j","k"],"_");
	//functions20(10);
	//functions21([1,2,3,4,5,6,7,8,9],3);
	//functions22("ow3roesoource.comooooo","o");
	functions23("abacddbec");
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
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
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

/**
 * Write a JavaScript function which says whether a number is perfect.
 * According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
 * @param  {[type]}
 * @return {[type]}
 */
 function functions12 (args)
 {
	// if positive integer
	if (args > 0)
	{
		var sum = 1;
		//check for divisors
		for(var i = 2; i <= args;i ++)
		{
			if (args % i == 0)
			{
				sum+= i;
			}

		}

		if (sum / 2 == args)
		{
			console.log(args + " is a perfect number");
		}
		else
		{
			console.log(args + " is NOT a perfect number");
		}
	}
}

/**
 * Write a JavaScript function to compute the factors of a positive integer. 
 * @param  {[type]}
 * @return {[type]}
 */
 function functions13 (arg)
 {

 	function compareInt(a, b)
 	{
 		return a - b;
 	}

	//array of divisors
	var divisors = [];

	var factors = "";

	//find all divisors. You only need to check all numbers until the sqrt(n)
	for (var i = 1; i <= Math.floor(Math.sqrt(arg)); i++)
	{
		// if divisible
		if (arg % i == 0)
		{
			divisors.push(i);

			//grab the other divisor
			// excludes case when i = 1
			if (arg / i != arg)
			{
				divisors.push(arg / i);
			}
		}

		divisors.sort(compareInt);

	}
	console.log(divisors);
}

/**
 * Write a JavaScript function to convert an amount to coins.
 * Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
 * Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
 * @param  {[type]} amount [description]
 * @param  {[type]} coins  [description]
 * @return {[type]}        [description]
 */
 function functions14 (amount, coins)
 {
 	var result = [];

	//coins is an array of coins
	var initAmount = amount;
	
	// Comparator function
	function descendingInt(a,b)
	{
		return b - a;
	}
	
	//sort coins by ascending
	coins.sort(descendingInt);
	
	var i = 0;
	while(amount > 0)
	{
		if (amount >= coins[i])
		{
			amount -= coins[i];
			result.push(coins[i]);
		}
		else
		{
			i++;
		}	
	}
	
	console.log("amount: " + initAmount + "\n coins: " + result);
}

/**
 * Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
 * Accept b and n from the user and display the result
 * @return {[type]} [description]
 */
 function functions15(b,n)
 {
	//Built in way
	//console.log(Math.pow(b,n));

	var result = 1;
	// Own way
	for(var i = 0; i < n; i ++)
	{
		result *= b;
	}

	console.log(result);
}

/**
 * Write a JavaScript function to extract unique characters from a string.
 * Example string : "thequickbrownfoxjumpsoverthelazydog"
 * Expected Output : "thequickbrownfxjmpsvlazydg"
 * @return {[type]} [description]
 */
 function functions16(arg)
 {
 	var characters = "";

	// I think what the direction mean, is to extract any character so that every letter in the string is unique
	for(var i = 0; i < arg.length; i++)
	{
		if (!characters.includes(arg[i]))
		{	
			characters += arg[i];
		}
	}
	console.log(characters);
}

/**
 * Write a JavaScript function to  get the number of occurrences of each letter in specified string
 * @param  {[type]} arg [description]
 * @return {[type]}     [description]
 */
 function functions17(arg)
 {
	var result = new Map();
	for(var i = 0; i < arg.length; i ++)
	{
		// ignore spaces
		if(arg[i] != " ")
		{
			// repeated character
			if(result.has(arg[i]))
			{
				var n = result.get(arg[i]);
				n ++;
				result.set(arg[i], n);
			}
			// new character
			else
			{
				result.set(arg[i], 1)
			}
		}
	}

	var mapIter = result.entries();
	for(var v of result)
	{
		console.log(v)
	}
}

/**
 * Write a function for searching JavaScript arrays with a binary search
 * Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
 * @return {[type]}
 */
function functions18(array,key)
{
	if(array.length < 1)
	{
		console.log("Empty array. Not Found");
	}
	else if (array.length == 1)
	{
		if(key == array[0])
		{
			console.log("Found " + key + " at index: 0");
		}
		else
		{
			console.log(key + " Not Found");
		}
	}
	else
	{
		//begin binary search
		var i = Math.ceil((array.length -1) / 2);
		var found = false;
		while(!found)
		{

			//key found
			if (key == array[i])
			{
				console.log("Found " + key + " at index: " + i);
				found = true;
			}
			//case when key is not found
			else if ((i >= array.length - 1) || (i <= 0))
			{
				console.log("Key: " + key + " not found in array");
				break;
			}
			// key is greater, go right
			else if (key > array[i])
			{
				//[0,1,3,4,5,6,7,8,9,10]
				i += Math.ceil((((array.length - 1) - i) / 2));
			}
			// key is smaller, go left
			else if ( key < array[i])
			{
				i = Math.floor(i/2);
			}
		}
	}
}

/**
 * Write a JavaScript function that returns array elements larger than a number.
 * @param  {[type]} arg [description]
 * @return {[type]}     [description]
 */
function functions19()
{
	var n = 10;
	var array = [10,5,16,23,8,1];
	var result = [];

	array = array.sort();

	for (var i = 0; i < array.length; i++)
	{
		if (array[i] > n)
		{
			result.push(array[i]);
		}
	}
	console.log(result);
}

/**
 * Write a JavaScript function that generates a string id (specified length) of random characters.
 * @param  {[type]} arg [description]
 * @return {[type]}     [description]
 */
function functions20(n)
{
	var string = "";
	var min = 48;
	var max = 122;

	for (var i = 0 ; i < n; i++)
	{
		var validChar = false;
		var random = 0;

		while(!validChar)
		{
 			random =  Math.floor(Math.random() * (max - min + 1)) + min;

			if (random > 57 && random < 65)
			{
				validChar = false;	
			}
			else if (random > 90 && random < 97)
			{
				validChar = false;
			}
			else
			{
				validChar = true;
			}
		}
		string += String.fromCharCode(random);
	}
	console.log("Randomly generated string of " + n + " characters is: " + string);
}

/**
 * Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
 * Sample array : [1, 2, 3] and subset length is 2
 * Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
 * @return {[type]} [description]
 */
function functions21(array,n)
{
	//[1,2,3,4,5]
	//n = 3
	//

	// start out at the first subset
	// for(var = i = (n-1); i < array.length; i++)
	// {
	// 	// using above subset, move the last index to create a new subset
	// 	for (var j = (n-1); j < array.length; j++)
	// 	{
	// 		var result = [];
	// 		//backtrack
	// 		for (var k = i - 1; k >= i - n; k--)
	// 		{
	// 			result.push(array[k]);
	// 		}
	// 		result.push(array[i - n])
	// 		console.log(result);
	// 	}	
	// }
}

/**
 * Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
 * Sample arguments : 'w3resource.com', 'o' 
 * Expected output : 2 
 * @return {[type]} [description]
 */
function functions22(string,letter)
{
	var result = string.split(letter);

	console.log(letter + " occurs in " + string + " " + (result.length - 1) + " times.")
}

/**
 * Write a JavaScript function to find the first not repeated character.
 * Sample arguments : 'abacddbec'
 * Expected output : 'e' 
 * @return {[type]} [description]
 */
function functions23(string)
{
	console.log("String is: " + string);
	var chars = new Map();
	var repeats = new Map();

	// loop through array once to count characters
	for(var i = 0; i < string.length; i++)
	{
		if (!chars.has(string[i]))
		{
			chars.set(string[i],string[i])
		}
		else
		{
			//repeats found
			repeats.set(string[i],string[i])
		}
	}

	//loop through loop to check for repeated characters
	for(var i = 0; i < string.length; i++)
	{
		if (!repeats.has(string[i]))
		{
			console.log("first non repeated char: " + string[i]);
		}
	}
}
