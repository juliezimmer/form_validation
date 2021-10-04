
// one-liner arrow function //
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

// these are the function calls stored in a variable //
let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

   form.addEventListener("submit", (e) => {
      e.preventDefault();

      engine(username, 0, "Username cannot be blank");
      engine(email, 1, "Email cannot be blank");
      engine(password, 2, "Password cannot be blank");
   });

let engine = (id, serial, message) => {
   if(id.value.trim() === ''){
      errorMsg[serial].innerHTML = message;
      // changes opacity so the failure icon can be seen //
      failureIcon[serial].style.opacity = "1"; 
      successIcon[serial].style.opacity = "0";
   }
   else {
      errorMsg[serial].innerHTML = "";
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
   }
};
 