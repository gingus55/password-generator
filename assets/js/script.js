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


function generatePassword(){
  //all my code needs to go here
  //this is to get my criteria
  function getCriteria(){
    const passwordLength = Number(window.prompt("Choose a password length", ""));

  }


  //these are my criteria strings
  var lowerCase="abcdefghijklmnopqrstuvwxyz";
  var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric="0123456789";
  var specialChars="" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


}