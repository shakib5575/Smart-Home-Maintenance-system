// Email validation
function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    let emailField = document.getElementById("email");
 
    if (email == "") {
        error.innerHTML = "Email is required.";
        emailField.className = "invalid";
        return false;
    }
    else if (!email.includes("@") || !email.endsWith(".com")) {
        error.innerHTML = "Please enter a valid email address.";
        emailField.className = "invalid";
        return false;
    }
    else {
        error.innerHTML = "";
        emailField.className = "valid";
        return true;
    }
}
 
 
// Password validation
function validatePassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("passwordError");
    let passwordField = document.getElementById("password");
 
    if (password == "") {
        error.innerHTML = "Password is required.";
        passwordField.className = "invalid";
        return false;
    }
    else if (password.length < 9) {
        error.innerHTML = "Password must contain at least 9 characters.";
        passwordField.className = "invalid";
        return false;
    }
    else {
        error.innerHTML = "";
        passwordField.className = "valid";
        return true;
    }
}
 
 
// Validate the complete form
function validateForm() {
    let emailResult = validateEmail();
    let passwordResult = validatePassword();
 
    if (emailResult == true && passwordResult == true) {
        return true;
    }
    else {
        return false;
    }
}
 
 
// Login button validation
function loginValidation() {
    if (validateForm() == true) {
        alert("Login Successful!");
    }
    else {
        alert("Please enter a valid email and password.");
    }
 
    return false;
}
 
 
// Check email while typing
document.getElementById("email").addEventListener("input", function() {
    validateEmail();
});
 
 
// Check password while typing
document.getElementById("password").addEventListener("input", function() {
    validatePassword();
});
 