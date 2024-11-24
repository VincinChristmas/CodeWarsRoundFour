//NUMBER 

/*

*/                       

//MY SOLUTION




/*********THE ABOVE IS A TEMPLATE*************** */


//NUMBER 7

/*
Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:

the code length should be 8;

The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

The 3rd-6th characters should be four numbers.

the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:

AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
*/                       

//MY SOLUTION
function rndCode() {
  let charBox = "ABCDEFGHIJKLM";
  let specialCharBox = "~!@#$%^&*";
  let charHouse = [];
  
  for (let i = 0; i < 2; i++) {
    charHouse.push(charBox[Math.floor(charBox.length * Math.random())]);
  }
  for (let i = 0; i < 4; i++) {
    charHouse.push(Math.floor(10 * Math.random()));
  }
  for (let i = 0; i < 2; i++) {
    charHouse.push(specialCharBox[Math.floor(specialCharBox.length * Math.random())]);
  }

  return charHouse.join('');
}



//NUMBER 6

/*
Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row 
and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

Example
For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96.
*/                       

//MY SOLUTION
function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
   return (nRows -row) * ((nCols + 1)-col)
}

//NUMBER 5

/*
This function should return an object, but it's not doing what's intended. What's wrong?
*/                       

//MY SOLUTION
function mystery() {
  var results =
    {sanity: 'Hello'};
  return results
}

//NUMBER 4

/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/                       

//MY SOLUTION
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

//NUMBER 3

/*
Coding in function tailAndHead. function accept 1 parameter arr(a number array).

We use an example to explain this task:

You got an array [123,456,789,12,34,56,78].

First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:

[123,456,789,1 2,3 4,5 6,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
And then, Calculate their product and return it(7x13x10x5x9x13=532350)

So, tailAndHead([123,456,789,12,34,56,78]) should return 532350 

All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use reduce() solve this kata.

Examples
tailAndHead([1,2,3,4,5]) should return 945
tailAndHead([111,2345,66,78,900]) should return 7293
tailAndHead([35456,782,569,2454,875]) should return 12012
*/                       

//MY SOLUTION
function tailAndHead(arr){
  let fixedArr = []
  for (let i = 0; i < arr.length; i++) {
    fixedArr.push(arr[i].toString())
  }
   let thisCollection = []
 for (let i = 1; i < fixedArr.length; i++) {
    thisCollection.push(Number(fixedArr[i-1][fixedArr[i-1].length-1]) + Number(fixedArr[i][0]))
  }
 
  return thisCollection.reduce((prev,curr)=>prev*curr)
}

//NUMBER 2

/*
Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” 

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there.

Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.
*/                       

//MY SOLUTION
function animals(heads, legs) {
  let x = (legs / 2) - heads;
  
 
  let y = heads - x;

  
  if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
     return "No solutions"; 
  } else if ( x >= 0 && y >= 0) {
   return [y, x]; 
  }
  else {
    return "No solutions"
  }
}

//NUMBER 1

/*
If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.
*/                       

//MY SOLUTION
function checkAlive (health) {
    if ( health > 0) {
      return true
    } 
    else {
      return false
    }
  }

