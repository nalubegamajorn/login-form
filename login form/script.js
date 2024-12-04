document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    let hasError = false;

    // Validate username
    if (!username) {
        document.getElementById('usernameError').textContent = 'Username is required.';
        document.getElementById('usernameError').style.display = 'block';
        hasError = true;
    }

    // Validate password
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        document.getElementById('passwordError').style.display = 'block';
        hasError = true;
    }

    // If no errors, you can proceed with form submission (e.g., send data to server)
    if (!hasError) {
        // Form submission logic here
        alert('Form submitted successfully!');
    }
});