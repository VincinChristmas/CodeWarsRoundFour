//NUMBER 

/*

*/                       

//MY SOLUTION




/*********THE ABOVE IS A TEMPLATE*************** */

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

