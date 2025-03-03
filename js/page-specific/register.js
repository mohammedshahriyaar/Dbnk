$(document).ready(function() {
    $("#registerForm").on("submit", function(e) {
        e.preventDefault();

        // Get form values using jQuery
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let password = $("#password").val().trim();

        // Validation
        if (!name) {
            alert("Please enter your Full Name.");
            $("#name").focus();
            return;
        }
        if (!email) {
            alert("Please enter your Email.");
            $("#email").focus();
            return;
        }
        if (!isValidEmail(email)) {
            alert("Please enter a valid Email address.");
            $("#email").focus();
            return;
        }
        if (!phone) {
            alert("Please enter your Phone number.");
            $("#phone").focus();
            return;
        }
        if (!isValidPhone(phone)) {
            alert("Please enter a valid 10-digit Phone number.");
            $("#phone").focus();
            return;
        }
        if (!password) {
            alert("Please enter your Password.");
            $("#password").focus();
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            $("#password").focus();
            return;
        }

        // Mock success
        alert("Registration Successful! (Mock)");
    });

    // Email validation function
    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Phone validation function (10 digits)
    function isValidPhone(phone) {
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }
});