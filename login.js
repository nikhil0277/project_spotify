document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation for demonstration
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page after login
    } else {
        alert('Invalid username or password');
    }
});
