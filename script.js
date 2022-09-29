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
//Characters to be used
var lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
var lowerCaseChar = lowerCase.split("");
console.log(lowerCaseChar)
var upperCase = ['QWERTYUIOPASDFGHJKLZXCVBNM'];

var numberic = [0,1,2,3,4,5,6,7,8,9];
var special = [' ','!','\"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
// console.log(lowerCase)
/*Test
console.log(upperCase)
console.log(lowerCase)
console.log(numberic)
console.log(special)
*/
// lowerCase.split("");


function generatePassword() {
  var passwordLength = prompt('How long of a password do you want? (8 to 128)',8);  //enter Number
    if  (passwordLength < 8 || passwordLength > 128) {                              //number outside range
      alert('Please choose a number between 8 and 128.')  
    } else {    console.log(passwordLength);                                                                                //number inside range
      confirm('Do you want lower case letters?')
        if (true) {
          console.log(lowerCase);
        } else (false) 
          confirm('Do you want upper case letters?')
          confirm('Do you want numbers?')
          confirm('Do you want special characters?')
           console.log()
        }
  }
  
  

var passwordLength = document.querySelector('#password') 
// -- doesn't show text on html
/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);*/
// 
// ----------Assignment code here---------------


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