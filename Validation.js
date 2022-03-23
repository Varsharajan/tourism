//  to toggle password-rule tool tip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
 })


var timeout;
var password = document.getElementById("passEntry");
var strengthBadge = document.getElementById("StrengthDisp");
var strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,15})");
//medium password :-If the password is at least six characters long and meets all the other requirements, or has no digit but meets the rest of the requirements.
var mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))");


// for password strength meter
password.addEventListener("input", function(){
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});


// Function to check password strength
function StrengthChecker(PasswordParameter) {
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    }
    else if(mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
    } 
    else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'poor';
    }
}

// to control password visibility

var togglePassword = document.getElementById("show_eye");
togglePassword.addEventListener("click",function()
{
    var  type = password.getAttribute("type")=== "password"? "text" : "password";
    password.setAttribute("type", type);
    if(password.type =="password")
        togglePassword.className= "fa fa-eye";
    else
        togglePassword.className= "fa fa-eye-slash";
});

// function for email-validation 
function emailvalidation()
{
var emailregexp =/^\w+([\.\-\+]\w+)*@\w+(\-\w+)*\.([a-z]{2,3})(\.[a-z]{2,3})?$/
var email = document.getElementById("emailentry");
    if(emailregexp.test(email.value.trim()))
        return true;
    else
        return false;
}


// function for phoneno-validation 
function phonenumbervalidation(){
var phnnovalidation = /^(\d{3})[\s.-]?(\d{3})[\s.-]?(\d{4})$/;
var phnoentry = document.getElementById("phn-no");
   if(phnnovalidation.test(phnoentry.value))
        return true;
    else
        return false;
}

//function for password-validation
function Entrypasswordvalidation()
{
    var Passwordregexp = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,15})");
    var passwordone = document.getElementById("passEntry");
    if(Passwordregexp.test(passwordone.value.trim()))
      return true;
    else
      return false;

}

// function for confirm-password validation

function confirmpassword(){
    var repeatpassword = document.getElementById("confirm-password");
    var firstpassword = document.getElementById("passEntry");
if( repeatpassword.value.trim() != firstpassword.value.trim())
    return false;
else
    return true;
}

//main-function for validation
function validation()
{
    var Email = emailvalidation();
    var Phonenum = phonenumbervalidation();
    var repeat = confirmpassword();
    var crrctpassword = Entrypasswordvalidation();
    if( emailvalidation() && phonenumbervalidation() && Entrypasswordvalidation()  && confirmpassword() )
    {   
        alert("Validation successful");
        return true;
    }
    else
    {
        
        if(!emailvalidation())
            alert("OOPS...Validation unsuccessful.\n Invalid email-id");
        else if(!phonenumbervalidation())
            alert("OOPS...Validation unsuccessful. \n Enter a valid phone no");
        else if(!Entrypasswordvalidation())
            alert("OOPS...Validation unsuccessful.\n Enter a strong password");
        else
            alert("OOPS...Validation unsuccessful.\n Re-entered password is different");
     return false;
    }

}


    