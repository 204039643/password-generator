//prompt or confirm for criteria
var passwordLength = prompt("Please specify a password length (character count).");
var lowercase = confirm("Do you want to include lowercase letters?");
var uppercase = confirm("Do you want to include uppercase letters?");
var numbers = confirm("Do you want to include numbers?");
var specialCharacters = confirm("Do you want to include special characters?");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Start password generation logic

  function generatePassword() {

    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-+={}'",
    retVal = "";
    for (var i = 0, n = charset.passwordLength + 1; i < passwordLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * 90));
    }
    return retVal;
  }

  //validate user selections in the console

  console.log("Length = " + passwordLength);
  console.log("Lowercase lettering = " + lowercase);
  console.log("Uppercase lettering = " + uppercase);
  console.log("Numeric = " + numbers);
  console.log("Special characters = " + specialCharacters);
  console.log("Password = " + password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



