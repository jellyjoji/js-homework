document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input field values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Reset error messages and input styling
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("username").classList.remove("is-valid");
    document.getElementById("password").classList.remove("is-valid");

    // Perform validation
    var isValid = true;

    if (username === "") {
      // Display username error message
      // document.getElementById("usernameError").textContent =
      //   "Please enter a username.";
      isValid = false;
    } else {
      document.getElementById("username").classList.add("is-valid");
    }

    if (password === "") {
      // Display password error message
      // document.getElementById("passwordError").textContent =
      //   "Please enter a password.";
      isValid = false;
    } else {
      document.getElementById("password").classList.add("is-valid");
    }

    if (isValid && username === "admin" && password === "password") {
      // Successful login
      alert("Login successful!");
      // Redirect to another page or perform additional actions
    } else if (isValid) {
      // Display general error message
      document.getElementById("usernameError").textContent =
        "Invalid username or password.";
      document.getElementById("passwordError").textContent =
        "Invalid username or password.";
    }
  });
