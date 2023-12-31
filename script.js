document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get email and password values from the form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Hardcoded credentials for demonstration purposes
        const validEmail = 'gillk01@pfw.edu';
        const validPassword = 'Khush@2004';

        // Simple validation: Check if entered credentials match the hardcoded ones
        if (email === validEmail && password === validPassword) {
            // Redirect to the report card page (replace 'report-card.html' with the actual file name)
            window.location.href = 'report-card.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
