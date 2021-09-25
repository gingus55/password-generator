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

function getCriteria(){
  const passwordLength = Number(window.prompt("Choose a password length", ""));
  //I need to check here that the input is in the range
  if(passwordLength>=8 && passwordLength<=128){
    
    const useLowercase = confirm("Would you like to include lower case?");

    const useUppercase = confirm("Would you like to use upper case?");
  
    const useNumeric = confirm("Would you like to include numbers?");
  
    const useSpecialchars= confirm("Would you like to include special characters?");
  
  } else {
    alert("Password length must be between 8 and 128, thank you");
    
  }

  

  return
}





function generatePassword(){
  //all my code needs to go here
  //this is to get my criteria
  getCriteria()
  //these are my criteria strings
  // var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  // var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var numeric = "0123456789";
  // var specialChars = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

return
}