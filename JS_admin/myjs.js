
function validationForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let code = document.getElementById("code").value;
    let nid = document.getElementById("nid").files[0];

    let valid = true;

    if(name == ""){
        document.getElementById("nameError").innerHTML = "Please fill the Name";
        valid = false;
    }
    else{
        document.getElementById("nameError").innerHTML = "";

        if(name[0] != name[0].toUpperCase()){
            document.getElementById("nameError").innerHTML = "Invalid name: first letter must be capital";
            valid = false;
        }
    }

    if(email == ""){
        document.getElementById("emailError").innerHTML = "Please fill the Email";
        valid = false;
    }
    else{
        document.getElementById("emailError").innerHTML = "";

        let emailPattern = /\.com$/i;

        if(!emailPattern.test(email)){
            document.getElementById("emailError").innerHTML = "Invalid email: must end with .com";
            valid = false;
        }
    }

    if(phone == ""){
        document.getElementById("phoneError").innerHTML = "Please fill the Phone Number";
        valid = false;
    }
    else{
        document.getElementById("phoneError").innerHTML = "";

        let phonePattern = /^\+8801[0-9]{9}$/;

        if(!phonePattern.test(phone)){
            document.getElementById("phoneError").innerHTML = "Invalid phone number: use +8801XXXXXXXXX";
            valid = false;
        }
    }

    if(username == ""){
        document.getElementById("usernameError").innerHTML = "Please fill the User Name";
        valid = false;
    }
    else{
        document.getElementById("usernameError").innerHTML = "";

        if(username[0] != "@"){
            document.getElementById("usernameError").innerHTML = "Invalid username: must start with @";
            valid = false;
        }
    }

    if(password == ""){
        document.getElementById("passwordError").innerHTML = "Please create Password";
        valid = false;
    }
    else{
        document.getElementById("passwordError").innerHTML = "";

        let number = /[0-9]/;
        let specialCharacter = /[^A-Za-z0-9]/;

        if(password.length < 8){
            document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters";
            valid = false;
        }
        else if(!number.test(password)){
            document.getElementById("passwordError").innerHTML = "Password must contain a number";
            valid = false;
        }
        else if(!specialCharacter.test(password)){
            document.getElementById("passwordError").innerHTML = "Password must contain a special character";
            valid = false;
        }
    }

    if(confirmPassword == ""){
        document.getElementById("confirmpasswordError").innerHTML = "Confirm password ";
        valid = false;
    }
    else{
        document.getElementById("confirmpasswordError").innerHTML = "";

        if(confirmPassword != password){
            document.getElementById("confirmpasswordError").innerHTML = "Passwords do not match";
            valid = false;
        }
    }

    if(code == ""){
        document.getElementById("codeError").innerHTML = "Enter security code";
        valid = false;
    }
    else{
        document.getElementById("codeError").innerHTML = "";

        if(code != "347812"){
            document.getElementById("codeError").innerHTML = "Invalid security code";
            valid = false;
        }
    }

    if(!nid){
        document.getElementById("nidError").innerHTML = "Please upload your NID card photo";
        valid = false;
    }
    else{
        document.getElementById("nidError").innerHTML = "";

        if(!nid.type.startsWith("image/")){
            document.getElementById("nidError").innerHTML = "Only photo is allowed (jpg, png etc.)";
            valid = false;
        }
    }

    // Final message
    const message = document.getElementById("message");

    if(valid == true){

        message.style.color = "green";
        message.innerHTML = "Registration Successful!";

        setTimeout(function(){
            window.location.href = "created.html";
        }, 2000);

        return false;
    }
    else{
        message.style.color = "red";
        message.innerHTML = "Please fix the errors above.";

        return false;
    }
}
function showPassword(){

    let password = document.getElementById("password");

    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}


function showConfirmPassword(){

    let password = document.getElementById("confirmpassword");

    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}

function changeStar(id, star){

    let input = document.getElementById(id);

    let update = function(){

        if(input.value == ""){
            star.style.color = "red";
        }
        else{
            star.style.color = "black";
        }
    };

    input.oninput = update;
    input.onchange = update;
}


window.onload = function(){

    let ids = ["name", "email", "phone", "username", "password", "confirmpassword", "code", "nid"];

    let stars = document.getElementsByClassName("star");

    for(let i = 0; i < ids.length; i++){

        changeStar(ids[i], stars[i]);
    }
};
