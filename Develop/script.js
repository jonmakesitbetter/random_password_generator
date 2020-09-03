// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var characterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var passwordLetters = letterArray[Math.floor(Math.random() * password.length)];
  var passwordNumbers = numberArray[Math.floor(Math.random() * password.length)];
  var passwordCharacters = characterArray[Math.floor(Math.random() * password.length)];
function generatePassword() {
  var password = [];
  var length = prompt("How many characters long do you want your password to be?");
  if (length <= 8 || length >= 128) {
  alert("Your password must be between 8 and 128 characters long.");
  }
  password.length = length;
  console.log(length);
  var letters = confirm("Do you want your password to contain letters?");
  password.push("a");
  console.log(password);
  var numbers = confirm("Do you want your password to contain numbers?");
  password.push(1);
  console.log(password);
  var specialCharacters = confirm("Do you want your password to contain special characters?");
  password.push("!");
  console.log(password);


  //Ask the user for password length
  //ask the user if they want letters
  //ask if they want numbers
  //ask if they want special characters

  //After each ask, put into the password that we will return, 1 of those types of characters if they want it.

  //after that, keep adding to the password array until it's the right length.

  return password.join("");

  // Add event listener to generate button

  // ALL YOUR CODE GOES HERE
  // GIVEN I need a new, secure password
  //          List of 'nouns'
  //prompt.writePassword("Please choose your password length.");

  // WHEN I click the button to generate a password
  //          Code button to trigger prompt series
  // THEN I am presented with a series of prompts for password criteria
  //          Prompt series start

  //prompt("Would you like your password to include letters?")

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  //          Need arrays of numbers, characters, and letters, then random character generator.
  // WHEN prompted for the length of the password
  //          Prompt asking for character length. Set a if (password.length) >= 128 || <=8 {prompt("Your password must contain between 8 and 128 characters") and re-prompt for length;}
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  //          Input character number, console.log(whateverTheyPutIn); Then run it through for loop that number of times for generators of selected types
  // WHEN prompted for character types to include in the password
  //          Need confirm for each type - number, character, and letter, to contain only true boolean response type.
  //          confirm.character("Do you want your password to contain special characters?") confirm.letters() confirm.numbers() End in an else { "Your password must contain something!"" and return to original prompt };
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  //          Already handled
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  //          Also already handled
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  //          Sounds good.
}

generateBtn.addEventListener("click", writePassword);
