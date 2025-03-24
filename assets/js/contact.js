document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("cc0diK9qLfB5KEdMn"); // Your EmailJS user ID
    })();
  
    // Listener for the contact form submission
    document.getElementById("contact-form").addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Collect the form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
  
        // Validate the form fields
        if (!name || !email || !subject || !message) {
            alert('Please fill all fields before submitting!');
            return; // Exit if any field is empty
        }
  
        // Send the data via Email.js
        emailjs.send("service_0m8t3pa", "template_ot4p50k", { 
            name: name,
            email: email,
            subject:subject,
            message:message
            
        
        }).then(function(response) {
            // Success message
            alert('Your message has been successfully sent! Thank you for reaching out to Vermax Consultants. Our team will review your inquiry and respond as soon as possible. We look forward to assisting you.');
            console.log('SUCCESS!', response); // Log success response
        }, function(error) {
            // Error message
            alert('Failed to send. Please try again.');
            console.error('FAILED...', error); // Log error response
        });
    });
  });