// JavaScript code for form validation

// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the form and input field elements
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the user's input value
        const inputValue = inputField.value.trim();

        // Regular expression pattern for alphanumeric input (letters and numbers only)
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;

        // Check if the input value matches the pattern
        if (alphanumericPattern.test(inputValue)) {
            // Valid input: display confirmation
            alert("Success! Your input is valid and the form has been submitted.");
        } else {
            // Invalid input: display error message
            alert("Error: Please enter only letters and numbers (no spaces or symbols).");
        }
    });
});
