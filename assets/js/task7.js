const form = document.getElementById('myForm');
const message = document.getElementById('message');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    return re.test(password);
}

function handleSubmit(event) {
    event.preventDefault();
  
    const email = form.email.value;
    const password = form.password.value;
  
    let isValid = true;
    let errorMessage = '';
  
    // Validate email format
    if (!validateEmail(email)) {
      isValid = false;
      errorMessage += 'Please enter a valid email.<br>';
    }
  
    // Validate password strength
    if (!validatePassword(password)) {
      isValid = false;
      errorMessage += 'Password must be at least 8 characters long and contain at least one number and one uppercase letter.';
    }
  
    // Display error message if form is not valid
    if (!isValid) {
      message.innerHTML = errorMessage;
      message.style.color = 'red';
    } else {
      message.innerHTML = 'Form submitted successfully!';
      message.style.color = 'green';
    }
    
}
  
form.addEventListener('submit', handleSubmit);