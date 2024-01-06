document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission for now
  
    validateForm(); // Validate the form fields
  });
  
  function validateForm() {
    // Fetching form input values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    // Fetch other input values similarly
  
    // Error messages placeholder elements
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    // Placeholder elements for other error messages
  
    // Resetting previous error messages
    fullNameError.textContent = '';
    emailError.textContent = '';
    // Reset other error message placeholders similarly
  
    // Validation criteria
    let isValid = true;
  
    if (fullName.length < 5) {
      fullNameError.textContent = 'Name must be at least 5 characters';
      isValid = false;
    }
  
    // Validate Email
    if (!email.includes('@')) {
      emailError.textContent = 'Enter a valid email address';
      isValid = false;
    }
  
    // Add similar validation for other fields (Phone Number, Password, Confirm Password)
  
    if (isValid) {
      // If all validations pass, you can submit the form or perform further actions
      alert('Form submitted successfully');
      // document.getElementById('myForm').submit(); // Uncomment this line to submit the form
    }
  }
  