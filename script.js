document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        
        alert("Message sent successfully!");
        contactForm.reset(); 
    });
});
