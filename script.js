//A.----Done----use a button in html to start javascript code

//prompt will ask user to choose length of password from 8 to 128

//promt will ask if user want lower case letters

//prompt will ask use what series of characters to use to generate password 



//another series of prompts will ask about lowercase, uppercase, numeric, and/or special charcters
//after all options are selected the output will be printed on page
var numbericArray = [0,1,2,3,4,5,6,7,8,9];

console.log(numbericArray)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
document.numbericArray
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/