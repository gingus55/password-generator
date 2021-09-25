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

var specialChars = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// get criteria function
const getCriteria = function () {
  const passwordLength = Number(window.prompt("Choose a password length", ""));

  //I need to check here that the input is in the range
  if (passwordLength >= 8 && passwordLength <= 128) {
    var useLowercase = confirm("Would you like to include lower case?");

    var useUppercase = confirm("Would you like to use upper case?");

    var useNumeric = confirm("Would you like to include numbers?");

    var useSpecialCharacters = confirm(
      "Would you like to include special characters?"
    );

    // at this point I need to see that not all have been answered false
    if (
      !useLowercase &&
      !useUppercase &&
      !useNumeric &&
      !useSpecialCharacters
    ) {
      alert("You need to choose something to be in your password!");
    } else {
      // this sets the object 'criteria' for my output
      var criteria = {
        length: passwordLength,
        lower: useLowercase,
        upper: useUppercase,
        numbers: useNumeric,
        special: useSpecialCharacters,
      };
    }
    return criteria;
  } else {
    alert("Password length must be between 8 and 128, thank you");
  }
};

// select random characters
const getRandom = function (criteria) {
  // my empty array
  var validValues = [];

  // given criteria add relevant choices
  if (criteria.lower) {
    validValues.push(lowerCase);
  }
  if (criteria.upper) {
    validValues.push(upperCase);
  }
  if (criteria.numbers) {
    validValues.push(numeric);
  }
  if (criteria.special) {
    validValues.push(specialChars);
  }

  // randomly generating numbers
  const randomIndex = Math.floor(Math.random() * validValues.length);
  const randomType = validValues[randomIndex];
  const randomSelector = Math.floor(Math.random() * randomType.length);
  var randomCharacter = validValues[randomIndex][randomSelector];

  return randomCharacter;
};

// password generation
const passwordGenerate = function (criteria) {
  // my empty password string
  var myPassword = "";
  for (var i = 0; i < criteria.length; i++) {
    const randomCharacter = getRandom(criteria);
    myPassword += randomCharacter;
  }
  return myPassword;
};

// Start of my main function
function generatePassword() {
  //main order of code
  const criteria = getCriteria();
  if (criteria !== undefined) {
    const myPassword = passwordGenerate(criteria);

    return myPassword;
  } else {
    return "";
  }
}


