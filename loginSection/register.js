
    // JavaScript
    const name = document.querySelector(".name");
    const password = document.querySelector(".password");
    const confirmPass = document.querySelector(".passConfirm");
    const RegBtn = document.querySelector(".enter");

    RegBtn.addEventListener("click", (e) => {
        e.preventDefault();
    let username = name.value;

    let passVal = password.value;
    let confirm = confirmPass.value;

    if (passVal !== confirm) {
        alert("Passwords are not the same");
      } else {
        // Store the credentials in localStorage
        localStorage.setItem("username", username); // Replace 'your_username' with the actual username input (if applicable)
    localStorage.setItem("password", confirm); // Store the entered password

    console.log("Passwords matched. Proceeding to the next page...");
    // You can redirect the user to the next page or submit the form here
    // For example, you can uncomment the following line to submit the form:
    document.querySelector("form").submit();
      }
      // console.log(username);
    });
