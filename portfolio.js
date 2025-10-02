// task-6: Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    let isValid = true;
    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    }
    if (email === "") {
        emailError.textContent = "Email cannot be empty";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Email must contain @ and a domain";
        isValid = false;
    }
    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
    } else {
        alert("Please fix the errors before submitting.");
    }
});