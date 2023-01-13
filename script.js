
//----Characters to be used----

var lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
var lowerCaseChar = lowerCase.split("");

var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var upperCaseChar = upperCase.split('');

var numeric = '0123456789';
var numericChar = numeric.split('');

var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialChar = special.split('');

// console.log(upperCaseChar)
// console.log(lowerCaseChar)
// console.log(numericChar)
// console.log(specialChar)
// */
// lowerCase.split("");
//----Prompts if one function----
// document.getElementById('generate').addEventListener("click",Prompts());


// function Prompts() {
//   var passwordLength = prompt('How long of a password do you want? (8 to 128)', 8);  
//   if (passwordLength < 8 || passwordLength > 128) {                              
//     alert('Please choose a number between 8 and 128.');
//   } else if (confirm('Do you want lower case letters?')) {
//     console.log(lowerCaseChar)
//   } console.log("none")
// }
//----Prompts----
//----Password Length----
var charUsed = [];

function generatePrompts() {                                                       
  passwordLength = prompt('How long of a password do you want? (8 to 128)', 8);  
  if (passwordLength < 8 || passwordLength > 128) {                              
    alert('Please choose a number between 8 and 128.', );  
    generatePrompts()                         
  } else {
    console.log(passwordLength);
    generateLowerCaseLetterCharacters();
  }
}

//----Selection of letters---- 

//----Lower Case Letters----
function generateLowerCaseLetterCharacters() {                                      
  if (confirm('Do you want lower case letters?')) {                           
    charUsed.push(lowerCaseChar);
  } else {
    charUsed;
  }
  console.log(charUsed);
  document.getElementById('password').innerHTML = charUsed

  // generateUpperCaseLetterCharacters();
}

// console.log(generateLowerCaseLetterCharacters).value

//----Upper Case Letter----
// var upperUsed;
// function generateUpperCaseLetterCharacters() {
//   if (confirm('Do you want upper case letters?')) {
//     upperUsed = lowerUsed.concat(upperCaseChar);
//   } else {
//     upperUsed = lowerUsed;
//   }
//   // generateNumbers();
//   console.log(upperUsed);
// }

