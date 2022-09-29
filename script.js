//----Notes----I understand the Pseudo code, i am just having trouble implementing it in JavaScript

//----Done----use a button in html to start javascript code

//prompt will ask user to choose length of password from 8 to 128 --Syntax prompt(text, defaultText)
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
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
var numberic = [0,1,2,3,4,5,6,7,8,9];
var special = [' ','!','\"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
//Test
console.log(upperCase)
console.log(lowerCase)
console.log(numberic)
console.log(special)



function generatePassword() {
  var passwordLength = prompt('How long of a password do you want?',);
  console.log(passwordLength)
}

/*
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
/*
//----------Assignment code here---------------


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

"method returns the first element that matches a CSS selector."-w3schools.com

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

addEventListener - w3schools.com
The addEventListener() method attaches an event handler to a document.
Syntax document.addEventListener(event, function, Capture)
*/