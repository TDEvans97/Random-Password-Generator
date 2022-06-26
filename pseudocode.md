Prompt the user for password criteria on Generate Password button click.
    a. User selects password character length of at least 8 characters and no more than 128. (8 < 128)
        1. Invalidate an answer that does not meet the specified range or datatype. 

    b. Do you want lowercase characters? Y/N

    c. Do you want uppercase characters? Y/N

    d. Do you want numeric characters? Y/N

    e. Do you want special characters? Y/N

    f. If no questions were answered Y, then invalidate, stating at least one character type must be chosen. 

Validate the user's input and generate a random password based on inputs. 

Display the password to the page. 


What is the starter code doing?

    Defining var generateBtn as the Generate Password button on displayed on the page.
    
    I need to add the generatePassword function assigned to var password in the writePassword function.

    passwordText.value takes the value given by generatePassword (aka var password) and gives it to the writePassword function to store in the #password text area of the page. 

    When a user clicks on the generate password button (var generateBtn), it will execute the writePassword function. 