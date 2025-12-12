document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting by default
    
    // Input fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    // Error spans
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const successMessage = document.getElementById("successMessage");

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    successMessage.textContent = "";
    [name, email, phone].forEach(field => field.classList.remove("error-field"));

    let valid = true;

    // Validate required fields
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        name.classList.add("error-field");
        valid = false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        email.classList.add("error-field");
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("error-field");
        valid = false;
    }

    // Validate phone number (basic: digits, spaces, dashes)
    const phonePattern = /^[0-9\s\-]{7,15}$/;
    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        phone.classList.add("error-field");
        valid = false;
    } else if (!phonePattern.test(phone.value)) {
        phoneError.textContent = "Invalid phone number. Use digits, spaces, or dashes.";
        phone.classList.add("error-field");
        valid = false;
    }

    // If valid, show success message
    if (valid) {
        successMessage.textContent = "Form submitted successfully!";
        
        // OPTIONAL: Submit the form for real
        // document.getElementById("ticketForm").submit();
    }
});
