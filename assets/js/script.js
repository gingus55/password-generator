// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword{
  //all my code needs to go here
  var lowerCase="abcdefghijklmnopqrstuvwxyz";
  var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric="0123456789";
  var specialChars="" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}