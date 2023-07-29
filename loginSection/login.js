   "use strict";
    const storedname = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");
    const inputUsername = document.querySelector(".username");
    const inputPassword = document.querySelector(".password");
    const loginBtn = document.querySelector(".login");

    loginBtn.addEventListener("click", (e) => {
      const enteredUsername = inputUsername.value;
    const enteredPassword = inputPassword.value;

    if (enteredUsername !== storedname || enteredPassword !== storedPass) {
        alert("User not found, please check your details again");
    e.preventDefault();
      } else {
        // If both username and password are correct, submit the form
        document.querySelector("form").submit();
      }
    });
