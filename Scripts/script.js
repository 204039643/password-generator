//DOM variable
//target 'generate' button element in UI
var generateBtn = document.querySelector('#generate');

//JS variables
var lowercase = "abcdefghijkklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "~!@#$%^&*()_+-";
var possibleString = "";
var password = "";
var passwordText = "";

//define functions
function generatePassword() {

    //ensure PW length is between 8 and 128 characters
    var length = prompt("Please provide a password length (8 to 128 char.");
    while (length < 8 || length > 128) {
        var length = prompt("Please provide a password length (8 to 128 char.");
        alert("Provide a length between 8 and 128 characters.");
    };
    console.log("PW length = " + length);

    // begin user selection criteria for uppercase, lowercase, numbers, or special characters
    var uppercaseChoice = confirm("Do you want to include uppercase letters?");
    console.log("Uppercase = " + uppercaseChoice);
    var lowercaseChoice = confirm("Do you want to include lowercase letters?");
    console.log("Lowercase = " + lowercaseChoice);
    var numbersChoice = confirm("Do you want to include numbers?");
    console.log("Numbers = " + numbersChoice);
    var specialCharChoice = confirm("Do you want to include special characters?");
    console.log("Special Characters = " + specialCharChoice);

    //build possible PW string
    if (uppercaseChoice) {
        possibleString = possibleString + uppercase;
    };
    console.log(possibleString);

    if (lowercaseChoice) {
        possibleString = possibleString + lowercase;
    };
    console.log(possibleString);

    if (numbersChoice) {
        possibleString = possibleString + numbers;
    };
    console.log(possibleString);

    if (specialCharChoice) {
        possibleString = possibleString + specialChar;
    };

    //ensure at least one of the PW critera is selected to true
    console.log(possibleString);
    if (uppercaseChoice === false && lowercaseChoice === false && numbersChoice === false && specialCharChoice === false) {
        alert("You must select at least one of the criteria to be 'true'.");
        return;
    }
    //build password using random selection of characters from possibleString for user specified length
    for (var i = 0; i < length; ++i) {
        password += possibleString.charAt(Math.floor(Math.random() * possibleString.length));
    };
    console.log(password);
    return password;
}

//write password back to #password element in UI
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.innerHTML = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);