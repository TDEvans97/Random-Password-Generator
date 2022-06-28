// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numberChar = "0123456789";
  var specialChar = "!@,#$%&*{}[]/\\+=";
  var result = "";

  // Prompt the user for their password length and take their input as a string.
  var userPasswordLengthString = window.prompt("How many characters do you want your password to be? Type a number between 8 and 127.");

  // Convert the user's password length string to a number.
  var userPasswordLengthNumber = parseInt(userPasswordLengthString);

  // Validates the condition of choosing a number within the given range.
  if (userPasswordLengthNumber >= 8 && userPasswordLengthNumber < 128) {
  } else {
    window.alert("Try again. Please enter a valid number between 8 and 127.");
    return; // Due to an invalid entry, return back to where the function generatePassword was originally called. 
  }

  // Confirm dialog boxes create true/false values.
  var includeUpperCase = confirm("Would you like to include uppercase characters?");

  var includeLowerCase = confirm("Would you like to include lowercase characters?");
 
  var includeNumbers = confirm("Would you like to include numeric characters?");

  var includeSpecialChar = confirm("Would you like to include special characters?");

  // If the user confirms true on an array of a character set, then place their variables in the passwordCharCart.
  // This is an array of strings. 
  var passwordCharCart = "";

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

  /*This for loop gets a character at a random index number until it meets the condition of the user's password length. */
  for (i = 0; i < userPasswordLengthNumber; i++) {
    randomNumber = Math.floor(Math.random() * passwordCharCart.length);
    result += passwordCharCart.charAt(randomNumber); // Redefine result's empty string
  }
  
  return result;
}

// Writes password to the #password input on the page.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adds an event listener to the generate button.
generateBtn.addEventListener("click", writePassword);