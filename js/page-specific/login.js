document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const userId = document.getElementById("userId").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation
        if (!userId) {
            alert("Please enter your User ID.");
            document.getElementById("userId").focus();
            return;
        }
        if (!password) {
            alert("Please enter your Password.");
            document.getElementById("password").focus();
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            document.getElementById("password").focus();
            return;
        }

        // Mock success
        alert("Login Successful! (Mock)");
    });
});