document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const googleLoginBtn = document.querySelector(".google-btn");

    // Handle form submission
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        const fullName = signupForm.querySelector("input[type='text']").value;
        const age = signupForm.querySelector("input[type='number']").value;
        const gender = signupForm.querySelector("select").value;
        const email = signupForm.querySelector("input[type='email']").value;
        const phone = signupForm.querySelector("input[type='tel']").value;
        const password = signupForm.querySelector("input[type='password']").value;

        if (!fullName || !age || !gender || !email || !phone || !password) {
            alert("Please fill out all fields.");
            return;
        }

        alert(`Account created successfully for ${fullName}!`);
        signupForm.reset(); // Clear form fields
    });

    // Handle Google login simulation
    googleLoginBtn.addEventListener("click", function() {
        alert("Redirecting to Google login...");
    });
});
