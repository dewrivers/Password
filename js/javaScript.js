  // VARIABLES
    var enter;
    var confirmSymbol;
    var confirmNumber;
    var confirmUppercase;
    var confirmLowercase;

  //PASSWORD VARIABLE VALUES

        number = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        symbol = ["!",  "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", ";", ":", "|", "+", "?", "<", ",", ">", ".", "/", "\""];
        uppercase = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"];
        lowercase = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"];
        // STAR IS FOR THE UPPERCASE CONVERSION
        star = [];
  
  //VARIABLE FOR CHOICES TO BE CONCATENATED
  var choices;

// UPPERCASE CONVERSION
var toUpper = function (x) {
   return x.toUpperCase();
};
// VARIABLES TO UPPERCASE CONVERSION 
uppercase = uppercase.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    pd = generatePassword();
    document.getElementById("password").placeholder = pd;
});

// FUNCTION TO GENERATE PASSWORD
function generatePassword() {
    enter = parseInt(prompt("Between 8 and 128, How many characters would you like for your password?"));
    
    if (!enter) {
        alert("I Need Values!! So i can work on your new Pasword.");
    }
    else if (enter < 8 || enter > 128) {
        // USER INPUT PROMPTS
        enter = parseInt(prompt("You must choose a number between 8 and 128!!"));

    } 

    else {
        alert("Chose what would you like!")
        // ONCE USER INPUT IS VALIDATED
        confirmNumber = confirm("Would you like Numbers?");
        confirmSymbol = confirm("Would you like Special Symbols?");
        confirmUppercase = confirm("Would you like Uppercase letters?");
        confirmLowercase = confirm("Would you like Lowercase letters?");
    };

 // IF 4 NEGATIVE OPTIONS
 if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
}

// IF 4 POSITIVE OPTIONS
    else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = symbol.concat(number, uppercase, lowercase);
    }

// IF 3 POSITIVE OPTIONS  
else if (confirmSymbol && confirmNumber && confirmUppercase) {
    choices = symbol.concat(number, uppercase);
}
else if (confirmSymbol && confirmNumber && confirmLowercase) {
    choices = symbol.concat(number, lowercase);
}
else if (confirmSymbol && confirmLowercase && confirmUppercase) {
    choices = symbol.concat(uppercase, lowercase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lowercase, uppercase);
}

// IF 2 POSTIVE OPTIONS

else if (confirmSymbol && confirmNumber) {
    choices = symbol.concat(number);

} else if (confirmSymbol && confirmLowercase) {
    choices = symbol.concat(lowercase);

} else if (confirmSymbol && confirmUppercase) {
    choices = symbol.concat(uppercase);
}
else if (confirmLowercase && confirmNumber) {
    choices = lowercase.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = lowercase.concat(uppercase);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(uppercase);
}

// IF 1 POSITIVE OPTION
else if (confirmSymbol) {
    choices = symbol;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = lowercase;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
    choices = star.concat(uppercase);
}

// ARRAY VARIABLE FOR LENGTH PASWORD
var password = [];

// RANDOM SELECTION
// ALL VARIBLES RANDOM SELECTION
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
// This joins the password array and converts it to a string
// Worked with a tutor to incorporate this option
var pd = password.join("");
UserInput(pd);
return pd;
}

// PASSWORD INTO THE TEXTBOX
function UserInput(pd) {
    document.getElementById("password").textContent = pd;
}

// ARRAY TO COPY PASSWORD
var copy = document.querySelector("#alert-copied");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}




