// Your JavaScript goes here!
// console.log("Hello, World!")
let message;
message = "this is a test message"; //declare the message variable
alert(message); //gives an alert of the variable let
//output is the message variable "this is a test message"


// Rockpaperscissorgame

// need function called computerPlay that randomly returns 'r, p, or s'

// need to define a list of rock/paper/scissor
// need to create a function that randomly choose from a 3 item list
//constant v
// const computer = ["rock", "paper", "scissor"];

// let computer = ["rock", "paper", "scissor"];
// need to have a functoin called on that choose between above three in an array


//this chooses a random item from the computer const array
// let computerInputer = computer[Math.floor(Math.random()*computer.length)];
// console.log(computerInput);

//function gives a random return when calling in computerPlay

function computerPlay () {
    let computer = ["rock", "paper", "scissor"];
    let computerInput = computer[Math.floor(Math.random()*computer.length)]
    console.log(computerInput);
}

computerPlay();

//this above will return a random input everytime it is called on

// player selection
//need to have user choose between rock paper scissor
//allow user to type out option to a box

// let userPlay = window.prompt("Rock, Paper or Scissor")
// this above works but I want to make sure all input is set to lower case so when comparing there are no issues


// let userPlay = prompt("User Selection").toLowerCase();
// prompt user for their selection. Takes all input and makes it lower case
//there is no input sanitiation yet thoug


//this function needs to play one game of Rock paper scissor
//funciton takes two parameters

// function playRound(playerSelection, computerSelection) {
//     // your code here!
//     if (` ${playerSelection} === "rock" && ${computerSelection} === "scissor"`) {
//         console.log("Player wins")
//     }
//   }
  
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));
//user chooses rock computer chooses paper
// user chooses rock comptuer chooses scissor

function playRound(playerSelection, computerSelection) {
    function computerPlay () {
        let computer = ["rock", "paper", "scissor"];
        let computerInput = computer[Math.floor(Math.random()*computer.length)]
        console.log(computerInput);
    }
    if (` ${playerSelection} === "rock" && ${computerSelection} === "scissor"`) {
        console.log("Player wins")
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

//this above works for first test. need to add in const then run runcion then use the console.log


function playRound(playerSelection, computerSelection) {
    
    function computerPlay () {
        let computer = ["rock", "paper", "scissor"];
        let computerInput = computer[Math.floor(Math.random()*computer.length)]
        console.log(computerInput);
    }
    if (` "${playerSelection}" === "rock" && "${computerSelection}" === "scissor"`) {
        console.log("Player wins 1");
    }
        else if(` "${playerSelection}" === "rock" && "${computerSelection}" === "paper"`) {
            console.log("Player loses 1");
        }
        else if(` "${playerSelection}" === "paper" && "${computerSelection}" === "rock"`) {
            console.log("Player wins 2");
        }
        else if(` "${playerSelection}" === "paper" && "${computerSelection}" === "scissor"`) {
            console.log("Player loses 2");
        }
        else if (` "${playerSelection}" === "scissor" && "${computerSelection}" === "paper"`) {
            console.log("Player wins 3");
        }
        else if(` "${playerSelection}" === "scissor" && "${computerSelection}" === "rock"`) {
            console.log("Player loses 3");
        }
   
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

//the above always print the first "if" line. not sure why

//this takes the current set userPlay and the computerPlay input and compares them

//take user input and compare to computer
//need to declar Rock v Paper v Scissor
}
//function that compares playerSelection to computerSelection

// the above so far will alert Draw if both options are the same


