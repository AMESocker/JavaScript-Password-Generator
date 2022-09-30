//----Notes----I understand the Pseudo code, i am just having trouble implementing it in JavaScript

//----Done----use a button in html to start javascript code

//----Done----prompt will ask user to choose length of password from 8 to 128 --Syntax prompt(text, defaultText)
//Also, if outside paramiter alert message
/*confirm will ask user -- confirm('message')
  wants lower case letters
  wants upper case letters
  wants numbers
  wants special characters
*/
//if cancel on all confirm alert Sorry try again 

//after all options are selected the output will be printed on page or in alert

//-----------------Code---------------------------------------
//----Characters to be used------------------------

var lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
var lowerCaseChar = lowerCase.split(""); 

var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var upperCaseChar = upperCase.split('');

var numeric = '0123456789';
var numericChar = numeric.split('');

var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialChar = special.split('');

//----End Characters--------------------------------
// console.log(specialChar)
// wrong - var special = [' ','!','\"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
// console.log(lowerCase)
// /*Test
// console.log(upperCase)
// console.log(lowerCase)
// console.log(numberic)
// console.log(special)
// */
// lowerCase.split("");

//----Prompts------------------------------------------------------------------------
//----Password Length----
function generatePrompts() {                                                       //HTML Event
  var passwordLength = prompt('How long of a password do you want? (8 to 128)',8);  //enter Number
    if  (passwordLength < 8 || passwordLength > 128) {                              //Enter number
      alert('Please choose a number between 8 and 128.');                           //when condition is not meet
    } else { generateLowerCaseLetterCharacters();   
      passwordLength;console.log(passwordLength);  
    }
  }

//----Selection of letters---- 
//----Lower Case Letters----
function generateLowerCaseLetterCharacters() {                                      //called by else from generatePassword
  if (confirm('Do you want lower case letters?')){                           //if yes, then include on concat array
    console.log(lowerCaseChar);lowerCaseChar;generateUpperCaseLetterCharacters();console.log(lowerCaseChar);
  } else {   (generateUpperCaseLetterCharacters())
  }
} 

//----Upper Case Letter----
function generateUpperCaseLetterCharacters() {
  if (confirm('Do you want upper case letters?')==true){
    console.log(upperCaseChar);generateNumbers()
  } else {(generateNumbers())

  }
}
 
//----Number----
function generateNumbers(){
  if (confirm('Do you want numbers?')==true){
    console.log(numericChar);generateSpecialCharacters()
  } else {(generateSpecialCharacters())

  }
}

//----Special Characters----
function generateSpecialCharacters(){
  if (confirm('Do you want special character?')==true){
    console.log(specialChar);
  } else {
    // atLeastOne()
  }
}

// function atLeastOne(){
//   if (!generateLowerCaseLetterCharacters() && !generateUpperCaseLetterCharacters() && !generateNumbers() && !generateSpecialCharacters()){
//     alert("Please chose at least one set of characters.")
//   } else {

//   }
// }
//Need to get true values to populate in charcter array
//----Character Array List----
// var characterArrayList = lowerCaseChar.concat(upperCaseChar, numericChar,specialChar);console.log(characterArrayList)
//From this array choose a series of random characters
//----Random number code----
// var X = [0,1,2,3,4,5,6,7,8,9,10]
// var random = characterArrayList[Math.floor(Math.random()*characterArrayList.length)];console.log(random)
// for (var i = 0; i <= characterArrayList.length; i++){console.log(random[i]);}

// function CharacterArray(){
//   var yesLowerCase = console.log(yesLowerCase);
//   var yesUpperCase = generateNumbers();console.log(yesUpperCase);
//   var yesNumbers
//   var yesSpecial
// }

// numbers = num1.concat(num2, num3);


//----Starter Code----
// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)

//----Older Notes----


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate"); 

// "method returns the first element that matches a CSS selector."-w3schools.com

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// addEventListener - w3schools.com
// The addEventListener() method attaches an event handler to a document.
// Syntax document.addEventListener(event, function, Capture)
//number inside range
// confirm('Do you want lower case letters?');
//   if (console.log(lowerCaseChar));{
//     confirm('Do you want upper case letters?');
//   } else 
//         {
//         confirm('Do you want upper case letters?');
//         confirm('Do you want numbers?')
//         confirm('Do you want special characters?')
//          console.log()
//       }
//     }
// }
// var passwordLength = document.querySelector('#password') 
// -- doesn't show text on html
