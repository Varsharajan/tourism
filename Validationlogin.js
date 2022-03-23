function emailvalidation()
{

var emailregexp =/^\w+([\.\-\+]\w+)*@\w+(\-\w+)*\.([a-z]{2,3})(\.[a-z]{2,3})?$/
var email = document.getElementById("Email");
    if(emailregexp.test(email.value.trim()))
        return true;
    else
        return false;
}


function Entrypasswordvalidation()
{
var Passwordregexp = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,15})");
var passwordone = document.getElementById("loginpassword");
    if(Passwordregexp.test(passwordone.value.trim()))
        return true;
    else
        return false;

}


function validate(){
    if(emailvalidation() && Entrypasswordvalidation())
     {
         alert("Login successful");
         return true;
     }
     else
     {
         if(!emailvalidation())
            alert("Login failed, enter a valid email-id");
         else
            alert("Login failed \n enter a valid password with atleast 8 characters long contains atlest one upper-case,one lower-case,one digit & one special character.")
            
        return false;
     }

}