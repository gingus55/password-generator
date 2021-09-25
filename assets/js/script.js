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

//my code starts here
// var passwordLength=0;
// var useLowercase=true;
// var useUppercase=true;
// var useNumeric=true;
// var useSpecialCharacters=true;

// get criteria function
function getCriteria() {
  const passwordLength = Number(window.prompt("Choose a password length", ""));
  //I need to check here that the input is in the range
  if (passwordLength >= 8 && passwordLength <= 128) {
    var useLowercase = confirm("Would you like to include lower case?");

    var useUppercase = confirm("Would you like to use upper case?");

    var useNumeric = confirm("Would you like to include numbers?");

    var useSpecialCharacters = confirm("Would you like to include special characters?");

    // at this point I need to see that not all have been answered false
    if(useLowercase===false && useUppercase===false && useNumeric===false && useSpecialCharacters===false){
        alert("You need to choose something to be in your password!")
    } else {
    var criteria = {
      length: passwordLength,
      lower: useLowercase,
      upper: useUppercase,
      numbers: useNumeric,
      special: useSpecialCharacters,
    };
  }
    console.log(criteria);

  } else {
    alert("Password length must be between 8 and 128, thank you");
  }
  return criteria;
}

// need criteria for use in other functions
var criteria = criteria;

// my object criteria


// Start of my main function
function generatePassword() {
  //all my code needs to go here
  //this is to get my criteria
  getCriteria();

  console.log(criteria);
  //these are my criteria arrays
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // var specialChars = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?","@", "[", "\", ']', "^" , "_", "`", "{", "|", "}", "~"];

  return;
}