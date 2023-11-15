
function validateForm(){
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("email-error"); 
  const passwordError = document.getElementById("password-error"); 

  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  let isValid = true;
  

  if(email.value.trim() == ""){
    emailError.innerHTML = "Please enter your email";
    isValid = false;
  }

  if(password.value.trim() == ""){
    passwordError.innerHTML = "Please enter your password";
    isValid = false;
  } 

  if (!ValidateEmail(email)){
    emailError.innerHTML = "Invalid email";
    isValid = false;
  }

return isValid;
}

function ValidateEmail(email){

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!email.value.match(validRegex)){
   return false 
  }
}