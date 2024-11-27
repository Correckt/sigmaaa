// In-memory storage for user accounts (for demo purposes)
const userDatabase = {};

document.getElementById("auth-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!username || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Check if the user exists
    if (userDatabase[username]) {
        // Log in the user
        if (userDatabase[username] === password) {
            errorMessage.textContent = "";
            window.location.href = "https://rickroll.it";
        } else {
            errorMessage.textContent = "Incorrect password!";
        }
    } else {
        // Create a new account
        userDatabase[username] = password;
        errorMessage.textContent = "Account created successfully! Logging you in...";
        setTimeout(() => {
            window.location.href = "https://rickroll.it";
        }, 1000);
    }
});