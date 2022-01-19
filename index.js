const { fifaData } = require("./fifa.js");

//don't touch this line ^^^^^^

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//filter the data
const finals2014 = fifaData.filter(function (item) {
  return item.Year === 2014 && item.Stage === "Final";
});

//(a) Home Team name for 2014 world cup final

//you need to ref the array, the desired index, the object you want
//why do you need the 0, it's the first index
//console.log("- Task 1A: ", finals2014[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final

//console.log("- Task 1B: ", finals2014[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final

//console.log("- Task 1C: ", finals2014[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final

//console.log("- Task 1D: ", finals2014[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */

//console.log("task 1E", finals2014[0]["Win conditions"]);

//note: check that callback and parameter orders are matched up correctly

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the ---> final <--- stage

hint - you should be looking at the stage key inside of the objects
*/
//1 param of data - an array

//filter() filters data into a new array
//return statement only returns if true

//data is the array of fifaData
//data of teams that made it to final STAGE

//getFinals takes fifaData
function getFinals(array) {
  //finalsData is a variable that holds a function
  //the function filters through fifaData
  const finalsData = array /*fifaData.filter*/
    .filter(function (index) {
      // (index) is a placeholder for all of the indexes w/i the objects inside fifaData
      //the indexes that contain a Stage key : "Final" will return in a new array, according to .filter()
      return index["Stage"] === "Final"; //<--- if there are instances where this is true, it will return those instances
    });
  return finalsData; //getFinals will return finalsData (which has the new array)
}
//two returns works here bc we basically have a function inside a fn

//console.log("- Task 2: ", getFinals(fifaData));

//this is the callback function that you pass to every other function in the questions

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function <--- receives another fn --- called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/
//try to use map()

//years is an array from from finalsData array
//finalsData array is from getFinals function

//getYears takes fifaData and function getFinals
function getYears(array, getFinalsCB) {
  // years is assigned to a function that calls getFinals(fifaData) (which returns finalData array) and creates a new array
  const years = getFinalsCB(array).map(function (index) {
    //.map() should have iterated thru each index of finalData and pushed the index.year to the new array
    return index.Year;
  });
  // variable years (which is the function up there ^^^^) gets returned by function getYears :)
  return years;
}

//console.log("- Task 3: ", getYears(fifaData,getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

//sort through getFinals array and compare "Home Team Goals" vs "Away Team Goals"

//getWinners accepts array fifaData and getFinals

function getWinners(array, getFinalsCB) {
    //variable winners is declared and calls getFinals(fifaData) -- a fn that returns the data for finalists-- and sorts through that data by object
  const winners = getFinalsCB(array).map(function (item) {
      //if in any of those objects the Home Team Goals key is greater than Away Team Goals key then the Home Team is the winner!
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
        //we can then return that item and .map() automatically pushes it into a new array for us
      return item["Home Team Name"];
      //otherwise if Away Team Goals is greater, then Away Team is the winner and their team name is returned
    } else {
        return item["Away Team Name"];
      }
    });
    //getWinners fn returns variable winners --which is the fn we created ^^^
    return winners;
  }


console.log("- TASK 4: ", getWinners(fifaData,getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(/* code here */) {
  /* code here */
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
  /* code here */
}

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working");
  return "bar";
}
foo();
module.exports = {
  foo,
  getFinals,
  getYears,
  getWinners,
  getWinnersByYear,
  getAverageGoals,
};
