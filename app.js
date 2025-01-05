//NUMBER 

/*

*/                       

//MY SOLUTION


/*********THE ABOVE IS A TEMPLATE*************** */

//NUMBER 51

/*
Create a package.json configuration and assign it to the configuration constant so it can be tested.

To pass the kata you need only the least that a real package file would require.
*/                       

//MY SOLUTION
const configuration = {
  "name": "foo",
   "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos"
};

//NUMBER 50

/*
Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. 
Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false
*/                       

//MY SOLUTION
function typeValidation(variable, type) {
  return (typeof variable === type) ? true :false;
}

//NUMBER 49

/*
The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/                       

//MY SOLUTION
function numberToPower(number, power){
  console.info(Math.log2(1024));
   let result = 1;  
  for (let i = 0; i < power; i++) {
    result *= number;  
    
  }
  return result
}


//NUMBER 48

/*
You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

If the age is 12 or lower, it return "You're a(n) kid"
If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
If the age is 65 or above, it return "You're a(n) elderly"
Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
*/                       

//MY SOLUTION
function describeAge(age) {
  return `You're a(n) ${age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly'}`;
}

//NUMBER 47

/*
Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available"
 depending on the truth value of the argument is_busy.
*/                       

//MY SOLUTION
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  }
}

//NUMBER 46

/*
Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed 
if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.
*/                       

//MY SOLUTION
function howMuchWater(water, load, clothes){
  let tooMany = load * 2
  if (clothes < load) {
    return 'Not enough clothes'
  }
  else if (clothes > tooMany) {
    return 'Too much clothes'
  }
  else {
    const waterNeeded = water * Math.pow(1.1, clothes - load);
    return Number(waterNeeded.toFixed(2));
  }
}

//NUMBER 45

/*
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. 
If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to 
return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers!
*/                       

//MY SOLUTION
function cookie(x){
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!"
  }
   else if (x === Number(x)) {
     return "Who ate the last cookie? It was Monica!"
   }
   else {
     return "Who ate the last cookie? It was the dog!"
   }
 }

//NUMBER 44

/*
This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
*/                       

//MY SOLUTION
function solve(x, y) {
  return x/y
} 

//NUMBER 43

/*
Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect 
ratio that maintain equal height. Round your answers up to the nearest integer.
*/                       

//MY SOLUTION

function aspectRatio(x,y){
  let ratio = []
  ratio.push(Math.ceil((y*16)/9))
  ratio.push(y)
    return ratio
  }


//NUMBER 42

/*
Create a function that finds the integral of the expression passed.

In order to find the integral all you need to do is add one to the exponent (the second argument),
 and divide the coefficient (the first argument) by that new number.

For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

Notes:

The output should be a string.
The coefficient and exponent is always a positive integer.
Examples
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"
*/                       

//MY SOLUTION
function integrate(coefficient, exponent) {
  let theExponent  = exponent + 1
  let theCoefficient = coefficient/theExponent
  let theIntegral = `${theCoefficient.toString()}x^${theExponent}`
  return theIntegral
}

//NUMBER 41

/*
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript 
Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

So, for example, if we execute the following code:

wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}
We would then expect the following statement to be true:

wrapper_obj["value"] == "my_wrapped_string"
Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
*/                       

//MY SOLUTION
function wrap(value) {
  return {
    value:value 
  };
}

//NUMBER 40

/*
In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, 
according to Freud. Note that an empty string, or no arguments, should return an empty string.
*/                       

//MY SOLUTION

function toFreud(string) {
  let newString = string.split(' ')
  if (string==="") {
    return ""
  }
    else {
  for (let i = 0; i < newString.length; i++) {
    newString[i] = 'sex'
  }
      }
    return newString.join(' ')
  }

//NUMBER 39

/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, 
unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/                       

//MY SOLUTION
function ensureQuestion(s) {
  return (s.includes('?')) ? s : s + '?'
}

//NUMBER 38

/*
Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/                       

//MY SOLUTION
function generateLink(user) {
  let encodedUser = encodeURIComponent(user)

return 'http://www.codewars.com/users/' + encodedUser
}


//NUMBER 37

/*
You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". 
The function should take four arguments:

the number of blue marbles you put in the bag to start
the number of red marbles you put in the bag to start
the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
the number of red marbles pulled out so far (always lower than the starting number of red marbles)
guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
*/                       

//MY SOLUTION
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled))
}

//NUMBER 36

/*
This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. 
Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. 
It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!
*/                       

//MY SOLUTION
var quote = function(fighter) {
  let winner = fighter.toLowerCase()
  return (winner ===  "george saint pierre") ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!" 
};

//NUMBER 35

/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/                       

//MY SOLUTION
function validateHello(greetings) {
  let translateGreeting = greetings.toLowerCase()
  return (translateGreeting.includes('hello') || translateGreeting.includes('ciao') || translateGreeting.includes('salut') || translateGreeting.includes('hallo') ||
         translateGreeting.includes('hola') || translateGreeting.includes('ahoj') || translateGreeting.includes('czesc')) ? true : false
}

//NUMBER 34

/*
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. 
Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite.
 you can assume that the string only contains letters or it's a empty string. 
 Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false
*/                       

//MY SOLUTION
function isOpposite(s1,s2){
  if (s1 === '' || s2 === '' || s1.length !== s2.length) {
    return false
  }
  else {
       for (let i = 0; i < s1.length; i++) {
         if((s1[i].toLowerCase() !== s2[i].toLowerCase()) || (s1[i] === s2[i])) {
           return false
         }
       }
    return true
    }
}


//NUMBER 33

/*
Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

Otherwise return, False/false (according to the language in use).

NOTE
: Remember, in C# you have to cast your output value to Object type!
*/                       

//MY SOLUTION

function playerRankUp (points) {
  if (points >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    }
    else {
      return false
    }
}

//NUMBER 32

/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). 
*/                       

//MY SOLUTION
function slope(points)
{
let topPortion = points[3] - points[1]
let bottomPortion = points[2] - points[0]
if (bottomPortion === 0) {
  return "undefined"
}
  else {
    return (topPortion / bottomPortion).toString()
  }
}

//NUMBER 31

/*
In this kata, your job is to return the two distinct highest values in a list. 
If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/                       

//MY SOLUTION
function twoHighest(arr) {
  let arrCollection = []
  let subCollection = arr.sort((a,b)=>b-a)
  for (let i = 0; i < subCollection.length && arrCollection.length < 2; i++) {
      if (!arrCollection.includes(subCollection[i])) {
        arrCollection.push(subCollection[i])
      }
    }
  return arrCollection
}

//NUMBER 30

/*
You are creating a text-based terminal version of your favorite board game. In the board game, 
each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/                       

//MY SOLUTION

var health = 100
var position = 0
var coins = 0

function main () {
   rollDice()
   move()
  combat()
   getCoins()
  buyHealth()
 
  printStatus()
}
//NUMBER 29

/*
An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. 
Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 
48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!
*/                       

//MY SOLUTION
function pointsPer48(ppg, mpg) {
  let gamePoints = (ppg / mpg) * 48
if (ppg == 0 || mpg== 0) {
  return 0
}
  else {
    return Number(gamePoints.toFixed(1))
  }
}

//NUMBER 28

/*
Check your arrows
You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an 
optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.

The expected result is a boolean, indicating whether you have any good arrows left.
*/                       

//MY SOLUTION

function anyArrows(arrows){
  if (arrows.length === 0) {
    return false
  }
  for (let i = 0; i < arrows.length; i++) {
    const arrow = arrows[i]
    const damagedValue = arrow.damaged
    if (typeof damagedValue === 'undefined'|| !damagedValue) {
      return true
    }
  }
  return false
}

//NUMBER 27

/*
You'll be given a string, and have to return the sum of all characters as an int. 
The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
*/                       

//MY SOLUTION
function uniTotal (string) {
  let asciiCodes = 0
 
    for (let i = 0; i < string.length; i++) {
      asciiCodes += string.charCodeAt(i)
    }
  
  return asciiCodes
}

//NUMBER 26

/*
If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. 
However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate 
is a rockstar who enjoys programming 
on Codewars in their spare time. The company offering the job may be able to work something out.
*/                       

//MY SOLUTION
function match(candidate, job) {
  if (typeof job.maxSalary === 'undefined' || typeof candidate.minSalary === 'undefined') {
    throw new TypeError('error');
  }
 else if (candidate.minSalary-(candidate.minSalary * .10) <= job.maxSalary) {
    return true
  }
  else {
    return false
  }
}

//NUMBER 25

/*
The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" 
in case of evil number and "It's Odious!" in case of odious number.

good luck :)
*/                       

//MY SOLUTION

function evil(n) {
  let sum = 0
  let newN = n.toString(2).split('')
  for (let i = 0; i <= newN.length; i++) {
    if (newN[i] === '1') {
      sum = sum + 1
    }
    else {
      sum = sum + 0
    }
    
  }
if (sum % 2 !== 0) {
      return "It's Odious!"
    }
else if (sum % 2 === 0) {
      return "It's Evil!"
    }
  
}

//NUMBER 24

/*
You are creating an "Escape the room" game. The first step is to create a hash table ( dict in Python) called rooms
 that contains all of the rooms of the game. There should be at 
least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed).
*/                       

//MY SOLUTION
// Add rooms here
var rooms = {
  name: {
    room: "room1",
    room2: "room two",
    room3: "room three"
  },
  description: {
    thisRoom: "dark room",
    otherRoom: "light room",
    backRoon: "rear Room"
                },
    completed: {
    BobsRoom: "No",
    LisasRooms: "Yes",
    FredsRoom: "Unknown"
    }
  }

//NUMBER 23

/*
Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block
 (/function) returns true for any item in the array. If the array is empty, the function should return false.
*/                       

//MY SOLUTION
function any(arr, fun){
  if (arr.length == 0){
      return false
    }
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])== true) { 
        return true
        }
    
  }
  return false
}



//NUMBER 22

/*
You are creating a text-based terminal version of your favorite board game. In the board game, 
each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. Create a function 
named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/                       

//MY SOLUTION
function doTurn () {
  // Call functions here
    rollDice();
    move();
    combat();
    getCoins();
    buyHealth();
    printStatus(); 
}

//NUMBER 21

/*
Add an item to the list:

AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not 
going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)
*/                       

//MY SOLUTION
function addExtra( listOfNumbers ){
  let newList = [...listOfNumbers]
  newList.push(666)
return newList
}


//NUMBER 20

/*
Given the molecular mass of two molecules 
M
1
M 
1
​
  and 
M
2
M 
2
​
 , their masses present 
m
1
m 
1
​
  and 
m
2
m 
2
​
  in a vessel of volume 
V
V at a specific temperature 
T
T, find the total pressure 
P
t
o
t
a
l
P 
total
​
  exerted by the molecules.
*/                       

//MY SOLUTION
const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => { 
  const R = 0.082; 
  const tempInKelvin = temp + 273.15; 
 let molarMass = ((givenMass1 / molarMass1) + (givenMass2 / molarMass2)); 
  return molarMass * (R * tempInKelvin / volume); }

//NUMBER 19

/*
In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

Equation will be the form of ax^2 + bx + c = 0

Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

Since there are infinitely many solutions to this problem, we fix a = 1.

Remember, the roots can be written like (x-x1) * (x-x2) = 0
*/                       

//MY SOLUTION
function quadratic(x1, x2){
  let quadraticArray = [1]
  quadraticArray.push((-1)*(x1 + x2))
  quadraticArray.push(x1 * x2)
  return quadraticArray
}

//NUMBER 18

/*
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true
 if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/                       

//MY SOLUTION
function none(arr, fun){
  for (let i = 0; i < arr.length; i++) {
    
    if (fun(arr[i])) { 
      return false; 
  }
    
    }
  return true
} 

//NUMBER 17

/*
Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. 
If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn 
it is on the next round.
*/                       

//MY SOLUTION
function whoseMove(lastPlayer, win) {
  if (lastPlayer === "black" && win === false) {
    return "white"
  }
  else if (lastPlayer === "white" && win === true) {
    return "white"
  }
   else if (lastPlayer === "white" && win === false) {
    return "black"
  }
  else if (lastPlayer === "black" && win === true) {
    return "black"
  }
}


//NUMBER 16

/*
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

*/                       

//MY SOLUTION
function periodIsLate(last, today, cycleLength) {
  let diffTime = today - last
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > cycleLength;
  
}

//NUMBER 15

/*
iven a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C  as 
three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]
*/                       

//MY SOLUTION
function barTriang(p1, p2, p3){
  //your code here
  let x = (p1[0] + p2[0] + p3[0]) /3
  let y = (p1[1] + p2[1] + p3[1]) /3
  let medianPoints = [ Number(x.toFixed(4)),  Number(y.toFixed(4))]
 
  return medianPoints
}


//NUMBER 14

/*
Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
*/                       

//MY SOLUTION


function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': 
      result = value.a + value.b;
      break;
    case'-': 
      result = value.a - value.b;
      break;
    case'/': 
      result = value.a / value.b;
      break;
    case'*': 
      result = value.a * value.b;
      break;
    case'%': 
      result = value.a % value.b;
      break;
    case'^': 
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

//NUMBER 13

/*
Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

left right call   result
  0    1     0    "left"
  0    1     1    "right"
  0    1     2    "right"
  0    0     0    "right"
  0    2     1    "right"
*/


//MY SOLUTION
function elevator(left, right, call){
  if (left > right && left > call) {
   return "right"
 }
 if (call > right && left > right) {
   return "left"
 }
 if (left === right) {
   return "right"
 }
 if (left === call) {
   return "left"
 }
 if (right === call) {
   return "right"
 }
 if (call > 0) {
   return "right"
 }
 if (call === 0) {
   return "left"
 }
 if (left > right && call === 0) {
   return "right"
 }
 if (call > right && left === 0) {
   return "left"
 }

}

//NUMBER 12

/*
Define a function that counts how many more (or less) pieces of toast you need in the toasters. 
Even though you need more or less, the number will still be positive, not negative.
*/                       

//MY SOLUTION



function sixToast(num) {
  // you code here
  if (num >= 6) {
    return num - 6
  }
  else if (num < 6) {
    return 6 - num
  }
}
//NUMBER 11

/*
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. 
Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

*/                       

//MY SOLUTION

function tripleTrouble(one, two, three){
  //Solution
  let newTrouble = []
  for (let i = 0; i < one.length; i++) {
      newTrouble.push(one[i])
      newTrouble.push(two[i])
      newTrouble.push(three[i])
    
    
  }
  return newTrouble.join('')
 }


//NUMBER 10

/*
Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) 
in increments of step.

Examples
(1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
(1, 15, 20) -> [1]
*/                       

//MY SOLUTION
function generateRange(min, max, step){
  let collection = []
  while (min <= max) {
    collection.push(min)
    min = min + step
    
  }
    return collection
  
  }

//NUMBER 9

/*
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, 
alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/                       

//MY SOLUTION
function padIt(str,n){
  let sum = 0
  while (sum < n) {
    sum = sum + 1
  
  if (sum % 2 !== 0) {
    str = '*' + str
  }
  else if (sum % 2 == 0) {
    str = str + '*'
  }
    }
  return str
}

//NUMBER 8

/*
Our friend Pac has finally decided to pursue a career in the coding industry.
He is a newbie, he needs to learn properly.
Therefore, Pac wants to apply for the worldwide famous -and very demanding-
'C0d3r 1ns1d3' Academy for beginners.
In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
He has been sent an email from the Academy with the following instructions,

Dear Pac,  
This is the first exercise. Find out what's wrong and fix the code.  
You have 15 minutes to send a solution.  
Good Luck.
This code is a mess! Would you help Pac to fix the code in time?

(This might be helpful -> Math.random();)

This is my first Kata, so please any feedback (especially on Test Cases) is welcome!
*/                       

//MY SOLUTION
function yourFutureCareer(career) {
	
  if (Math.random(career) <= 0.32) {
    return  'FrontEnd Developer'
    }
   else if (Math.random(career) <= 0.65) {
    return  'BackEnd Developer'
  } else {
    return 'Full-Stack Developer'
  }
}


yourFutureCareer();


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

