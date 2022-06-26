//set wins, losses, and ties to zero.
var wins = 0;
var losses = 0;
var ties = 0;

//Pop-up window text
var userInput = prompt('Enter the letter "R", "P", or "S"').toUpperCase();
console.log(userInput);

// function rpsGame(){
//     var wins = 0;

//     var losses = 0;
    
//     var ties = 0;

//     var userChoice = prompt("Do you choose R, P, or S?").toUpperCase();

//     // userChoice.toUpperCase();

//     var computerChoice = Math.random();
//      {
//         if (computerChoice < 0.34) {
//             computerChoice = "R";
//         } else if (computerChoice <= 0.67) {
//             computerChoice = "P";
//         } else {
//             computerChoice = "S";
//         }
//     };

//     if (userChoice === computerChoice) {
//         ties++;
//     } else if ((userChoice === "R" && computerChoice === "S") || (userChoice === "P" && computerChoice === "R") || (userChoice === "S" && computerChoice === "P")) {
//         wins++;
//     } else {
//         losses++;
//     };

//     // if 

//     // window.alert(); {

//     // }

//     console.log(wins, losses, ties);


// }