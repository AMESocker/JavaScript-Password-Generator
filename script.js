
//----Characters to be used----

var lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
var lowerCaseChar = lowerCase.split("");
// console.log(lowerCaseChar)
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
console.log(charUsed)
function generatePrompts() {
  passwordLength = prompt('How long of a password do you want? (8 to 128)', 8);
  charUsed = [];
  document.getElementById('password').innerHTML = charUsed
  if (passwordLength < 8 || passwordLength > 128) {
    confirm('Please choose a number between 8 and 128.',);
  } else {
    console.log(passwordLength);
    generateLowerCaseLetterCharacters();
  }
}
//----Selection of letters---- 
//--------Lower Case Letters----
function generateLowerCaseLetterCharacters() {
  if (confirm('Do you want lower case letters?')) {
    for (let i = 0; i < lowerCaseChar.length; i++) {
      charUsed.push(lowerCaseChar[i]);
    }
  } else {
    charUsed;
  }
  console.log(charUsed);
  generateUpperCaseLetterCharacters();
}
//----Upper Case Letter----

function generateUpperCaseLetterCharacters() {
  if (confirm('Do you want upper case letters?')) {
    for (let i = 0; i < upperCaseChar.length; i++) {
      charUsed.push(upperCaseChar[i]);
    }
    // var newUCLArray = charUsed[0].concat(charUsed[1]);
    // charUsed = newUCLArray;
  } else {
    charUsed
  }
  console.log(charUsed);
  generateNumbers();
}

function generateNumbers() {
  if (confirm('Do you want numbers?')) {
    for (let i = 0; i < numericChar.length; i++) {
      charUsed.push(numericChar[i]);
    }
    // var newNumArray = charUsed[0].concat(charUsed[1]).concat(charUsed[2]);
    // charUsed = newNumArray;
  } else {
    charUsed
  }
  console.log(charUsed);
  generateSpecial()
}

function generateSpecial() {
  if (confirm('Do you want special characters?')) {
    for (let i = 0; i < specialChar.length; i++) {
      charUsed.push(specialChar[i]);
    }
  } else {
    charUsed
  }
  console.log(charUsed);

  // charUsed = charUsed[0].concat(charUsed[1]).concat(charUsed[2]).concat(charUsed[3])

  // console.log(charUsed);
  generatePassword();
}

function generatePassword() {
  displayPassword = [];
  passwordIndex = [];
  // console.log(charUsed.length);
  // console.log(passwordLength)
  for (let i = 0; i < passwordLength; i++) {
    //password is the index number
    password = Math.floor(Math.random() * charUsed.length)
    passwordIndex.push(password)
    // console.log(password)
    displayPassword.push(charUsed[password])


  }
  console.log(passwordIndex)
  console.log(displayPassword);
  document.getElementById('password').innerHTML = displayPassword.join('');
  console.log(displayPassword.join(''))
}
// 0000 script.js:92 Uncaught TypeError: Cannot read properties of undefined (reading 'concat')
// 0001 |{%)_,!
// 0010 489787
// 0011 '4: {2%
// 0100
// 0101
// 0110
// 0111
// 1000
// 1001
// 1010
// 1011
// 1100
// 1101
// 1110
// 1111 e#iKw,Y 