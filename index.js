const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailConfirmInput = document.querySelector('#email-confirm');

form.addEventListener('submit', (event) => {
    if (!validateEmails(emailInput.value, emailConfirmInput.value)) {
    event.preventDefault();
    alert('Email does not match. Please enter a valid email address.');}
});

function validateEmails(email, emailConfirm) {
  // Regular expression for a valid email address
const re = /\S+@\S+\.\S+/;
  // Check whether the emails match and are valid
return email === emailConfirm && re.test(email);}
