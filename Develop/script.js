// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
var characterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",];
var passwordOptions = [];
function generatePassword() {
  var password = [];
  var length = prompt(
    "How many characters long do you want your password to be?"
  );
  if (length <= 8 || length >= 128) {
    alert("Your password must be between 8 and 128 characters long.");
    writePassword();
  } 

  var capitalLetters = confirm("Do you want your password to contain capital letters?");
  var lowerCaseLetters = confirm("Do you want your password to contain lower case letters?");
  var numbers = confirm("Do you want your password to contain numbers?");
  var specialCharacters = confirm("Do you want your password to contain special characters?");

  if (capitalLetters === true) {
      passwordOptions.push(...upperCaseArray);
  }
  if (lowerCaseLetters === true) {
      passwordOptions.push(...owerCaseArray);
}
  if (numbers === true) {
      passwordOptions.push(...numberArray);
  }
  if (specialCharacters === true) {
      passwordOptions.push(...characterArray);

      // if (capitalLetters == false && lowerCaseLetters == false && numbers == false && specialCharacters == false){
      //   alert("Your password must contain characters!");
      //   writePassword();
      // }

  }
  //lowerCaseArray[Math.floor(Math.random() * password.length)]; === example code for randomizer
for (var i = 0; i < length; i++) {
  password = passwordOptions[Math.floor(Math.random() * length)];
}

  return password.join("");
  console.log(password);
}
  // Add event listener to generate button

  // ALL YOUR CODE GOES HERE
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page


generateBtn.addEventListener("click", writePassword);