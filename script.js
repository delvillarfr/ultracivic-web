// Get the input fields and the image element
const emailInput = document.getElementById('email');
const focusImage = document.getElementById('focus-image');
const emailButton = document.getElementById('email-button');

// Show the image when the user focuses on a form field
emailInput.addEventListener('focus', () => {
    focusImage.style.display = 'block';
});

// Hide the image when the form fields lose focus
emailInput.addEventListener('blur', () => {
    focusImage.style.display = 'none';
});

// Add an event listener to the button
emailButton.addEventListener('click', () => {
    // Show the message after the button is clicked
    emailButton.classList.add('clicked');
});

// chatgpt faqs
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}

