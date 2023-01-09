function muliply(a,b){
if(isNaN(a)||isNaN(b)){
    return "error";
}
else{
return a*b;
}
}
console.log(muliply(3,4));

//function to reverse a string

function reverseString(str){
  var newString="";
  for(var i=str.length-1; i>=0; i--){
      newString += str[i];
  }
  return newString;
}
reverseString("hello");

//function to reverse each word of the sentnce

function wordReverser(str){
  var arr= str.split("");
  var outPut=[];
  for (var i=arr.length; i>=0; i--){
outPut.push(arr[i]);
  }
  return outPut.join("");
}
wordReverser("Ephaste  NIYONIZEYE FILS");




//to check either number is palindrome or not
function check_palindrome( str )
{
  let j = str.length -1;
  for( let i = 0 ; i < j/2 ;i++)
  {
    let x = str[i] ;//forward character
    let y = str[j-i];//backward character
    if( x != y)
    {
      // return false if string not match
      return false;
    }
  }
  /// return true if string is palindrome
  return true;

}
function Is_palindrome(str)
{
    var character = check_palindrome(str);
    if(character==true){
        console.log("the passed string is palindrome");
    }else
        console.log("the passed string is not palindrome");

}
var test ="nana";
Is_palindrome(test)





//program to check if the string is palindrome or not

function checkPalindrome(string) {

  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

      // check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}
function main(){
// take input
//const string = prompt('Enter a string: ');
const string="dad";
// call the function
const value = checkPalindrome(string);

console.log(value);















function maximum(arr){

    var max= arr[0];

  for (i = 1; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
     }
     return max;
    }

function minimun(arr){
        var min= arr[0];
     for(var i=0;i<=arr.length;i++){
     if(min>arr[i]){
         min=arr[i];
     }
     return min;
    }
}
var arr=[10,5,6,67,8,95,100];
document.write("the maximum number is:", maximum(arr));

document.write("the minimun number is:", minimun(arr));




















// function tto remove the duplicate element from the string

function removeDuplicate(str){
    var lhs = new Set();
    for(var i =0;i<str.length;i++)
    lhs.add(str[i]);
    for(var ch of lhs)
    document.write(ch)
}
var str = "muhayimanaambroise";
removeDuplicate(str);











// program to check the number of occurrence of a character

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);









function removeDuplicates( str) {
    var lhs = new Set();
    for (var i = 0; i < str.length; i++)
        lhs.add(str[i]);

    // print string after deleting duplicate elements
    for (var ch of lhs)
        document.write(ch);
}

/* Driver program to test removeDuplicates */

    var str = "mama";
    removeDuplicates(str);





// function reverseString(str){
//   var newString ="";
//   for(var i = str.length -1;i>=0;i--){
//     newString+=str[i];

//   }

//   return newString;
// }
// console.log(reverseString("hello"));



// const sameParityFilter = (arr = [], filter = "odd") => {
//     const odds = []
//     const evens = []

//     for(item of arr) {
//         if(item % 2 === 0) {
//             evens.push(item)
//         } else {
//             odds.push(item)
//         }
//     }

//     if(filter === "odd") {
//         return odds
//     } else {
//         return evens
//     }
// }

// console.log(sameParityFilter([1 , 7 , 5 , 6 , 7 , 1 , 2] ))

// console.log(sameParityFilter([1 , 7 , 5 , 6 , 7 , 1 , 2]))

function OddEvenNumber(arr=[],filter==="odds"){
    var odds=[];
    var evens =[];
    for(var item of arr){
      if(item % 2 ===0){
        evens.push(item);

      }else{
        odds.push(item);
      }

    }

    if(filter ==="odds"){
      return odds;
    }else{
      return evens;
    }

    }
    console.log("the array of evens number are:");
    console.log(OddEvenNumber([1,3,4,5,6,7,8,9],"even"));
    console.log("the array of odds number is:");
    console.log(OddEvenNumber([1,3,4,5,6,7,8,9]));




    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
          }
        }
        return sum;
      }
      
      var sample = { a: 1 , b: 2 , c:3 };
      var summed = sum( sample );
      console.log( "sum: "+summed );







      function maximum(arr){

        var max= arr[0];
    
      for (i = 1; i < arr.length; i++) {
                if (arr[i] > max)
                    max = arr[i];
         }
         return max;
        }
    
    function minimun(arr){
            var min= arr[0];
         for(var i=0;i<=arr.length;i++){
         if(min>arr[i]){
             min=arr[i];
         }
         return min;
        }
    }
    var arr=[10,5,6,67,8,95,100];
    document.write("the maximum number is:", maximum(arr));
    
    document.write("the minimun number is:", minimun(arr));


 

// JavaScript program to check whether two strings
// are anagrams of each other

	/* function to check whether two strings are
	anagram of each other */
	function areAnagram(str1,str2)
	{
		// Get lengths of both strings
		let n1 = str1.length;
		let n2 = str2.length;

		// If length of both strings is not same,
		// then they cannot be anagram
		if (n1 != n2)
			return false;

		// Sort both strings
		 str1.sort();
		 str2.sort()

		// Compare sorted strings
		for (let i = 0; i < n1; i++)
			if (str1[i] != str2[i])
				return false;

		return true;
	}
var str1= ['l','i','s','t','e','n'];
var str2= ['s','i','l','e','n','t'];
console.log(areAnagram( str1, str2));




	//SIMPLE EFFICIENT FUNCTION TO CHECK ANAGRAMS
  function areAnagrams(a,b){
    var x=a.split("").sort();
    var y=b.split("").sort();
    for( var i=0; i<=x.length;i++){
        if( x.length==y.length){
            if( x[i]==y[i]){
                console.log(a+" "+"and"+" "+b+" "+"Are anagrams");
            }
            else{
                console.log(a+" "+"and"+" "+b+" "+"Are not anagrams");
            }
        }
        else{
            console.log(a+" "+"and"+" "+b+" "+"Are not anagrams and they have different amount of letters");
        }
}
}
var a="listen";
var b="silent";
areAnagrams(a,b);



// js program to perform string comparison
//function compare(string1, string2 ){ 
  const string1 = 'JavaScript Program';
  const string2 = 'javascript program';
  
  // compare both strings
  const result = string1.toUpperCase() === string2.toUpperCase();
  
  if(result) {
      console.log('The strings are similar.');
  } else {
      console.log('The strings are not similar.');
  }
//}

// function to count number of vowels in the string

const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}
var str="ephaste";
findVowels( str);


function findVowels( str){
  var count =0;
  const vowels=['a','i','u','e','o'];
  for(let char of str.toLowerCase()){
      if(vowels.includes(char)){
          count++;
      }
  }
  
  return count;
}
var str="ephaste";
findVowels( str);




const findVowels = str => {
  const matched = str.match(/[aeiou]/gi)
  return matched ? matches.length : 0
}

//FIBONACCI SERIES
// 0 1 1 2 3 5 8 13..
function fibonacci  (num){
  // store the Fibonacci sequence you're going
  // to generate inside an array and
  // initialize the array with the first two
  // numbers of the sequence
  const result = [0, 1]

  for(let i = 2; i <= num; i++) {
    // push the sum of the two numbers
    // preceding the position of i in the result array
    // at the end of the result array
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }
  // return the last value in the result array
  return result[num]
}
var num=4
fibonacci (num);



function fibonacci(num) {
  // if num is either 0 or 1 return num
  if(num < 2) {
    return num
  }
  // recursion here
  return fibonacci(num - 1) + fibonacci(num - 2)
}
var num=4
fibonacci (num);