// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

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
  passwordLength = document.getElementById("pl").value;
  charUsed = [];
  document.getElementById('pl').innerHTML = charUsed
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
  var lclCheckBox = document.getElementById("lcl");
  if (lclCheckBox.checked == true) {
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
  var uclCheckBox = document.getElementById("ucl");
  if (uclCheckBox.checked == true) {
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
  var nbCheckBox = document.getElementById("nb");
  if (nbCheckBox.checked == true)  {
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
  var scCheckBox = document.getElementById("sc");
  if (scCheckBox.checked == true)  {
    for (let i = 0; i < specialChar.length; i++) {
      charUsed.push(specialChar[i]);
    }
  } else {
    charUsed
  }
  if (charUsed.length !== 0) {
    generatePassword();

    console.log(charUsed);
    console.log(charUsed.length);
  } else {
    alert(`Please select one set.`);
    return;
  }
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
  modal.style.display = "none";
  console.log(passwordIndex)
  console.log(displayPassword);
  document.getElementById('password').innerHTML = displayPassword.join('');
  console.log(displayPassword.join(''))
  // alert(displayPassword.join(''))
}
// 0000 (8) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
// 0001 <[^^!+&~
// 0010 62117511
// 0011 / 35.06?
// 0100 TGKQXQXT
// 0101 J<YV!)H%
// 0110 3HXEIYIN
// 0111 |-.61;~R
// 1000 tjnljsmf
// 1001 >|mk_e&.
// 1010 eny62mga
// 1011 f62k,r'.
// 1100 rwJbPEWO
// 1101 %DW]&TQl
// 1110 EEKnPXDg
// 1111 Us7T']|% 