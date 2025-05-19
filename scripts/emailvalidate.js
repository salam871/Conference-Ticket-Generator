// Email validation
export function validateEmail() {
  const emailInput = document.getElementById("email-address");
  const email = emailInput.value.trim();
  const emailInvalidMessage = document.querySelector(".email-invalid");

  // Reset error message
  emailInvalidMessage.style.display = "none";

  if (!email) {
    emailInvalidMessage.textContent = "Email is required";
    emailInvalidMessage.style.display = "flex";
    emailInput.focus();
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailInvalidMessage.textContent =
      "Please enter a valid email address (e.g., username@example.com)";
    emailInvalidMessage.style.display = "flex";
    emailInput.focus();
    return false;
  }

  return true;
}

// Initialize email validation on blur
export function initEmailValidation() {
  const emailInput = document.getElementById("email-address");
  emailInput.addEventListener("blur", validateEmail);
}
