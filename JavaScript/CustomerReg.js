
function validationForm(e){
    let fname=document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let terms = document.getElementById("terms").checked;

    let valid=true;

    if(fname=="")
    {
        const fnameErr=document.getElementById("fnameErr");
        fnameErr.innerHTML="First name cannot be empty";
        valid=false;
    }
    else 
    {
        const fnameErr=document.getElementById("fnameErr");
        fnameErr.innerHTML="";

        if (fname[0] != fname[0].toUpperCase()) 
        {

            const fnameErr=document.getElementById("fnameErr");
            fnameErr.innerHTML ="First letter must be uppercase";
            valid=false;
        } 
       
    }

    if (lname == "") 
    {
        const lnameErr = document.getElementById("lnameErr");
        lnameErr.innerHTML = "Last name cannot be empty";
        valid = false;
    }
    else 
    {
        const lnameErr = document.getElementById("lnameErr");
        lnameErr.innerHTML = "";

        if (lname[0] != lname[0].toUpperCase()) 
        {
            const lnameErr = document.getElementById("lnameErr");
            lnameErr.innerHTML = "First letter must be uppercase";
            valid = false;
        }
    }

    if(email=="")
    {
        const emailErr=document.getElementById("emailErr");
        emailErr.innerHTML="Email cannot be empty";
        valid=false;
    }
    else
    {
        const emailErr=document.getElementById("emailErr");
        emailErr.innerHTML="";

        const emailPattern = /@gmail\.com/;

        if(!emailPattern.test(email))
        {
            const emailErr=document.getElementById("emailErr");
            emailErr.innerHTML="Please enter a valid email address";
            valid=false;   
        }
    }

    if(phone=="")
    {
        const phoneErr=document.getElementById("phoneErr");
        phoneErr.innerHTML="Number cannot be empty";
        valid=false;
    }
    else
    {
        const phoneErr=document.getElementById("phoneErr");
        phoneErr.innerHTML="";

        if(isNaN(phone)||phone.length!=11)
        {
            const phoneErr=document.getElementById("phoneErr");
            phoneErr.innerHTML="Phone number must be 11 digit";
            valid=false;
        }
    }

    if(address=="")
    {
        const addressErr=document.getElementById("addressErr");
        addressErr.innerHTML="Address cannot be empty";
        valid=false;
    }
    else
    {
        const addressErr=document.getElementById("addressErr");
        addressErr.innerHTML="";

        if(address.length<20)
        {
            const addressErr=document.getElementById("addressErr");
            addressErr.innerHTML="Address must contain minimum 20 character";
            valid=false;
        }
    }

    if(password=="")
    {
        const passwordErr=document.getElementById("passwordErr");
        passwordErr.innerHTML="Password cannot be empty";
        valid=false;
    }
    else
    {
        const passwordErr=document.getElementById("passwordErr");
        passwordErr.innerHTML="";

        let specialCharacter=/[@#$%!]/;

        if(!specialCharacter.test(password))
        {
            const passwordErr=document.getElementById("passwordErr");
            passwordErr.innerHTML="Password must contain a special character";
            valid=false;
        }
    }

    if(confirmPassword=="")
    {
        const confirmPasswordErr=document.getElementById("confirmPasswordErr");
        confirmPasswordErr.innerHTML="Confirm password cannot be empty";
        valid=false;
    }
    else
    {
        const confirmPasswordErr=document.getElementById("confirmPasswordErr");
        confirmPasswordErr.innerHTML="";

        if(confirmPassword!=password)
        {
            const confirmPasswordErr=document.getElementById("confirmPasswordErr");
            confirmPasswordErr.innerHTML="Password does not match";
            valid=false;
        }
    }

    if(terms==false)
    {
        const termsErr=document.getElementById("termsErr");
        termsErr.innerHTML="Please accept the terms and conditions";
        valid=false;
    }
    else
    {
        const termsErr=document.getElementById("termsErr");
        termsErr.innerHTML="";
    }

    




    if(valid == true) 
    {
        return true;
    }
    else {
        return false;
    }
    
}