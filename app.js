const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Function to check if the email and password are valid
function isValidCredentials(email, password) {
  const validEmail = email === 'faviandev05@gmail.com';
  const validPassword = password === '233307077';
  return validEmail && validPassword;
}

// Function to show an error message
function showErrorMessage(message) {
  errorMessage.textContent = message;
}

// Function to show a success message
function showSuccessMessage() {
  alert('Anda Berhasil Login!');
  window.location.href = 'order.html';
}

// Add event listener to the login form
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if the email and password are valid
  if (isValidCredentials(emailInput.value, passwordInput.value)) {
    showSuccessMessage();
  } else {
    showErrorMessage('Email atau password salah');
  }
});
