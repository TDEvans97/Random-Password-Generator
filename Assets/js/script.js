// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables 
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var userPasswordLength = "";

function validatePasswordLength() {
  if (userPasswordLength >= 8 && userPasswordLength < 128) {
    //continue to prompt about character selections
  }
  else ("Error: Please enter a valid length of characters between 8 and 127.")
}






function generatePassword() {

  function passwordGen() {

    /* The function randomChar gives you a random index number within the passwordChar array 
    then selects the data assigned to that index number from the passwordChar array.
    (The passwordChar array is based upon user input to opt-in to various character sets.) */
    function randomChar() {
      passwordChar(Math.floor(Math.random() * passwordChar.length));
    }

    /*This for loop repeats the function passwordGen until the condition of meeting the user's selected password length is met. */
    for (let i = 0; i < userPasswordLength; i++) {
      randomPassword += randomChar();
    }
    
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
