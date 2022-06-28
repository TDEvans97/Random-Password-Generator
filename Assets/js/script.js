// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables 
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var masterList = [""];
// Global Functions

// Gives you a random index number within the passwordCharCart array.
function getRandomNumber() {
  masterList += passwordCharCart
  var randomNumber = Math.floor(Math.random() * masterList.length); 
  console.log(masterList);
  console.log(randomNumber);
  return randomNumber;
}

function getChar() {
  return passwordCharCart[getRandomNumber];
}

function generatePassword() {

  // Prompt the user for their password length and take their input as a string.
  var userPasswordLengthString = window.prompt("How many characters do you want your password to be? Type a number between 8 and 127.");

  // Convert the user's password length string to a number.
  var userPasswordLengthNumber = parseInt(userPasswordLengthString);

  // Validates the condition of choosing a number within the given range.
  if (userPasswordLengthNumber >= 8 && userPasswordLengthNumber < 128) {
    console.log(userPasswordLengthNumber);
  } else {
    window.alert("Try again. Please enter a valid number between 8 and 127.");
    return; // Due to an invalid entry, return back to where the function generatePassword was originally called. 
  }

  // Confirm dialog boxes create true/false values.
  var includeUpperCase = confirm("Would you like to include uppercase characters?");
  console.log(includeUpperCase)

  var includeLowerCase = confirm("Would you like to include lowercase characters?");
  console.log(includeLowerCase)

  var includeNumbers = confirm("Would you like to include numeric characters?");
  console.log(includeNumbers)

  var includeSpecialChar = confirm("Would you like to include special characters?");
  console.log(includeSpecialChar)

  // If the user confirms true on an array of a character set, then place their variables in the passwordCharCart.
  // This is a master list array of strings. 
  var passwordCharCart = [];

  if (includeUpperCase) /*if truthy*/ {
    passwordCharCart = passwordCharCart.concat(uppercaseChar); // .concat Concatenates the uppercase array to the cart.
  }

  if (includeLowerCase) {
    passwordCharCart = passwordCharCart.concat(lowercaseChar); // .concat Concatenates the lowercase array to the cart.
  }

  if (includeNumbers) {
    passwordCharCart = passwordCharCart.concat(numberChar); // .concat Concatenates the number array to the cart.
  }

  if (includeSpecialChar) {
    passwordCharCart = passwordCharCart.concat(specialChar); // .concat Concatenates the special character array to the cart.
  }

  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialChar) /*if falsy*/ {
    window.alert("Please confirm at least one character set. Options include uppercase letters, lowercase letters, numbers, and special characters.");
    return; // If the user does not select any character set, return back to where function generatePassword was originally called.
  }

  console.log(passwordCharCart);
  
  var generatedPassword = "";
  
  /*This for loop repeats the functions getRandomNumber and getChar until the condition of meeting the user's selected password length is met. */
  for (i = 0; i < userPasswordLengthNumber; i++) {
    getRandomNumber(); // Get a random number for each iteration
    getChar(); // In the function getChar, use those random numbers as index numbers to pull a char from passwordCharCart
    generatedPassword += getChar;
  }
  
  return generatedPassword;
}

// Writes password to the #password input on the page.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adds an event listener to the generate button.
generateBtn.addEventListener("click", writePassword);