async function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    const messageDiv = document.getElementById('login-message');

    if (response.ok) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful! Redirecting...';
        // Redirect to dashboard or home page
        setTimeout(() => {
            window.location.href = '/';
        }, 1500);
    } else {
        messageDiv.textContent = result.message;
    }
}