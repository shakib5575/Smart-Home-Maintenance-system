// Function 1: Validate Full Name
function validateName() {
    let name = document.getElementById("name").value;
 
    if (name == "") {
        document.getElementById("nameError").innerHTML =
        "Name is required.";
        return false;
    }
    else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML =
        "Name can contain only letters and spaces.";
        document.getElementById("name").className="invalid"
        return false;
    }
    else {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("name").className="valid";
        return true;
    }
}
// Function 2: Validate NID
function validateNID() {
    let nid = document.getElementById("nid").value;
 
    if (nid == "") {
        document.getElementById("nidError").innerHTML =
        "NID number is required.";
        return false;
    }
    else if (!/^[0-9]+$/.test(nid) ||
             (nid.length != 10 && nid.length != 13 && nid.length != 17)) {
        document.getElementById("nidError").innerHTML =
        "NID must contain 10, 13 or 17 digits.";
         document.getElementById("nid").className="invalid"
        return false;
    }
    else {
        document.getElementById("nidError").innerHTML = "";
         document.getElementById("nid").className="valid"
        return true;
    }
}
// Function 3: Validate Date of Birth
function validateDOB() {
    let dob = document.getElementById("dob").value;
    let error = document.getElementById("dobError");
 
    if (dob == "") {
        error.innerHTML = "Date of birth is required.";
        document.getElementById("dob").className = "invalid";
        return false;
    }
 
    let birthDate = new Date(dob);
    let today = new Date();
 
    let age = today.getFullYear() - birthDate.getFullYear();
 
    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
         today.getDate() < birthDate.getDate())) {
        age--;
    }
 
    if (birthDate > today) {
        error.innerHTML = "Date of birth cannot be in the future.";
        document.getElementById("dob").className = "invalid";
        return false;
    }
    else if (age < 18) {
        error.innerHTML = "You must be at least 18 years old.";
        document.getElementById("dob").className = "invalid";
        return false;
    }
    else {
        error.innerHTML = "";
        document.getElementById("dob").className = "valid";
        return true;
    }
}
 
// Function 4: Validate Experience
function validateExperience() {
    let experience = document.getElementById("experience").value;
 
    if (experience == "") {
        document.getElementById("experienceError").innerHTML =
        "Years of experience is required.";
        return false;
    }
    else if (!/^[0-9]+$/.test(experience) ||
             Number(experience) > 50) {
        document.getElementById("experienceError").innerHTML =
        "Experience must be a whole number between 0 and 50.";
         document.getElementById("experience").className="invalid"
        return false;
    }
    else {
        document.getElementById("experienceError").innerHTML = "";
         document.getElementById("experience").className="valid"
        return true;
    }
}
// Function 5: Validate Profile Picture
function validateProfilePicture() {
    let picture = document.getElementById("profilePicture").value;
 
    if (picture == "") {
        document.getElementById("pictureError").innerHTML =
        "Profile picture is required.";
        return false;
    }
    else if (!/\.(jpg|jpeg|png)$/i.test(picture)) {
        document.getElementById("pictureError").innerHTML =
        "Only JPG, JPEG and PNG pictures are allowed.";
         document.getElementById("profilePicture").className="invalid"
        return false;
    }
    else {
        document.getElementById("pictureError").innerHTML = "";
         document.getElementById("profilePicture").className="valid"
        return true;
    }
}
// Function 6: Validate Email
function validateEmail() {
    let email = document.getElementById("email").value;
 
    if (email == "") {
        document.getElementById("emailError").innerHTML =
        "Email is required.";
        return false;
    }
    else if (! email.includes("@")||! email.endsWith(".com")) {
        document.getElementById("emailError").innerHTML =
        "Please enter a valid email address.";
        return false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}
// Function 7: Validate Mobile Number
function validateMobile() {
    let mobile = document.getElementById("mobile").value;
 
    if (mobile == "") {
        document.getElementById("mobileError").innerHTML =
        "Mobile number is required.";
        return false;
    }
    else if (!/^01[3-9][0-9]{8}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
        "Enter a valid 11-digit Bangladeshi mobile number.";
         document.getElementById("mobile").className="invalid"
        return false;
    }
    else {
        document.getElementById("mobileError").innerHTML = "";
         document.getElementById("mobile").className="valid"
        return true;
    }
}
// Function 8: Validate Password
function validatePassword() {
    let password = document.getElementById("password").value;
 
    if (password == "") {
        document.getElementById("passwordError").innerHTML =
        "Password is required.";
        return false;
    }
    else if (password.length < 9|| !/[0-9]/.test(password)||!/[!@#$%^&*(),.:{}|<>]/.test(password)) {
        document.getElementById("passwordError").innerHTML =
        "Password must contain at least 9 characters,a special character and one number.";
         document.getElementById("password").className="invalid"
        return false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
         document.getElementById("password").className="valid"
        return true;
    }
}
// Function 9: Validate Confirm Password
function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
 
    if (confirmPassword == "") {
        document.getElementById("confirmPasswordError").innerHTML =
        "Please confirm your password.";
        return false;
    }
    else if (password != confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML =
        "Passwords do not match.";
        return false;
    }
    else {
        document.getElementById("confirmPasswordError").innerHTML = "";
        return true;
    }
}
// Function 10: Validate Gender
function validateGender() {
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;
 
    if (!male && !female && !other) {
        document.getElementById("genderError").innerHTML =
        "Please select your gender.";
        return false;
    }
    else {
        document.getElementById("genderError").innerHTML = "";
        return true;
    }
}
// Function 11: Validate Service Category
function validateService() {
    let service = document.getElementById("service").value;
 
    if (service == "") {
        document.getElementById("serviceError").innerHTML =
        "Please select a service category.";
        return false;
    }
    else {
        document.getElementById("serviceError").innerHTML = "";
        return true;
    }
}
// Function 12: Validate Skills Description
function validateDescription() {
    let description = document.getElementById("description").value;
 
    if (description.trim() == "") {
        document.getElementById("descriptionError").innerHTML =
        "Please describe your skills.";
        return false;
    }
    else {
        document.getElementById("descriptionError").innerHTML = "";
        return true;
    }
}
// Function 13: Validate Present Address
function validatePresentAddress() {
    let address = document.getElementById("presentAddress").value;
 
    if (address.trim() == "") {
        document.getElementById("presentAddressError").innerHTML =
        "Present address is required.";
        return false;
    }
    else {
        document.getElementById("presentAddressError").innerHTML = "";
        return true;
    }
}
// Function 14: Validate Permanent Address
function validatePermanentAddress() {
    let address = document.getElementById("permanentAddress").value;
 
    if (address.trim() == "") {
        document.getElementById("permanentAddressError").innerHTML =
        "Permanent address is required.";
        return false;
    }
    else {
        document.getElementById("permanentAddressError").innerHTML = "";
        return true;
    }
}
// Function 15: Validate Terms and Conditions
function validateTerms() {
    let terms = document.getElementById("terms").checked;
 
    if (!terms) {
        document.getElementById("termsError").innerHTML =
        "Please agree to the terms and conditions.";
        return false;
    }
    else {
        document.getElementById("termsError").innerHTML = "";
        return true;
    }
}
// Function 16: Validate the Complete Form
function validateForm() {
    let result = true;
 
    if (!validateName()) result = false;
    if (!validateNID()) result = false;
    if (!validateDOB()) result = false;
    if (!validateExperience()) result = false;
    if (!validateProfilePicture()) result = false;
    if (!validateEmail()) result = false;
    if (!validateMobile()) result = false;
    if (!validatePassword()) result = false;
    if (!validateConfirmPassword()) result = false;
    if (!validateGender()) result = false;
    if (!validateService()) result = false;
    if (!validateDescription()) result = false;
    if (!validatePresentAddress()) result = false;
    if (!validatePermanentAddress()) result = false;
    if (!validateTerms()) result = false;
 
    return result;
}
function confirmRegister() {
 
    if (validateForm() == true) {
 
        let answer = confirm("Are you sure you want to register?");
 
        if (answer == true) {
            alert("Registration Successful!");
        }
 
    }
    else {
        alert("Please fill out all required fields correctly.");
    }
 
    return false;
}
// Input Events: Validate while the user enters information
document.getElementById("name").addEventListener("input", validateName);
document.getElementById("nid").addEventListener("input", validateNID);
document.getElementById("dob").addEventListener("input", validateDOB);
document.getElementById("experience").addEventListener("input", validateExperience);
document.getElementById("profilePicture").addEventListener("input", validateProfilePicture);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("mobile").addEventListener("input", validateMobile);
document.getElementById("password").addEventListener("input", function() {
    validatePassword();
    validateConfirmPassword();
});
document.getElementById("confirmPassword").addEventListener("input", validateConfirmPassword);
document.getElementById("male").addEventListener("input", validateGender);
document.getElementById("female").addEventListener("input", validateGender);
document.getElementById("other").addEventListener("input", validateGender);
document.getElementById("service").addEventListener("change", validateService);
document.getElementById("description").addEventListener("input", validateDescription);
document.getElementById("presentAddress").addEventListener("input", validatePresentAddress);
document.getElementById("permanentAddress").addEventListener("input", validatePermanentAddress);
document.getElementById("terms").addEventListener("change", validateTerms);

document.getElementById("clearBtn").addEventListener("click", function(event) {
 
    let answer = confirm("Are you sure you want to clear the form?");
 
    if (answer == false) {
        event.preventDefault();
    }
    else {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("pictureError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("mobileError").innerHTML = "";
        document.getElementById("dobError").innerHTML = "";
        document.getElementById("nidError").innerHTML = "";
        document.getElementById("genderError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("confirmPasswordError").innerHTML = "";
        document.getElementById("serviceError").innerHTML = "";
        document.getElementById("experienceError").innerHTML = "";
        document.getElementById("descriptionError").innerHTML = "";
        document.getElementById("presentAddressError").innerHTML = "";
        document.getElementById("permanentAddressError").innerHTML = "";
        document.getElementById("termsError").innerHTML = "";
    }
});
 

 
 
