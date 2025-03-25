// Toggle between Signup and Signin forms
const singnInBut = document.getElementById("signInbt");
const signUpBut = document.getElementById("signUpbt");
const signInForm = document.getElementById("signIn");
const signUpform = document.getElementById("signUp");
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
    return emailPattern.test(email);
}

function validateName(name) {
    return namePattern.test(name);
}
function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.remove());
}
// Show Sign In form when Sign In button is clicked
singnInBut.addEventListener('click', function () {
    signUpform.style.display = "none";
    signInForm.style.display = "block";
})
// Show Sign Up form when Sign Up button is clicked
signUpBut.addEventListener('click', function () {
    signInForm.style.display = "none";
    signUpform.style.display = "block";
})
// Registration Form Validation
document.querySelector('#signUp form').addEventListener('submit', function (event) {
    clearErrors();  // Clear previous error messages
    // Get form values
    const fName = document.getElementById('fName').value.trim();
    const lName = document.getElementById('LName').value.trim();
    const email = document.getElementById('signUpemail').value.trim();
    const password = document.getElementById('signUppassword').value.trim();

    // Check if fields are empty
    if (!fName || !lName || !email || !password) {
        alert('All fields are required.');
        event.preventDefault();  // Stop form submission
        return;
    }
    if (!validateName(fName)) {
        displayError('fName', 'First name must contain only letters.');
        event.preventDefault();
    }

    if (!validateName(lName)) {
        displayError('LName', 'Last name must contain only letters.');
        event.preventDefault();
    }

    if (!validateEmail(email)) {
        displayError('signUpemail', 'Please enter a valid email address.');
        event.preventDefault();
    }

    if (password.length < 6) {
        displayError('signUppassword', 'Password must be at least 6 characters long.');
        event.preventDefault();
    }
});

document.querySelector('#signIn form').addEventListener('submit', function (event) {
    clearErrors();  // Clear previous error messages
    // Get form values
    const email = document.querySelector('#signInemail').value.trim();
    const password = document.querySelector('#signInpassword').value.trim();

    if (!validateEmail(email)) {
        displayError('signInemail', 'Please enter a valid email address.');
        event.preventDefault();
    }

    if (password.length < 6) {
        displayError('signInpassword', 'Password must be at least 6 characters long.');
        event.preventDefault();
    }
});

// Function to display error messages below inputs
function displayError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;

    // Check if there's an existing error message, and remove it
    const existingError = field.parentElement.querySelector('.error');
    if (existingError) {
        existingError.remove();
    }

    field.parentElement.appendChild(errorDiv);
}
