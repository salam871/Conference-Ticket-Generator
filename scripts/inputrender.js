// Import functions from other files
import { validateAvatar } from "./avatarinputvalidate.js";
import { validateEmail, initEmailValidation } from "./emailvalidate.js";

// Name validation
function validateName() {
  const nameInput = document.getElementById("full-name");
  const name = nameInput.value.trim();
  const nameValidation = document.querySelector(".fullname-invalid");

  nameValidation.style.display = "none";

  if (!name) {
    nameValidation.textContent = "Full name is required";
    nameValidation.style.display = "flex";
    return false;
  }

  return true;
}

// Applying today's date to the ticket
function ticketDate() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = today.toLocaleDateString(
    undefined,
    options
  );
}

// Update confirmation with form data
function updateConfirmation() {
  // Set name
  document.getElementById("name").textContent =
    document.getElementById("full-name").value;

  // Set email
  const email = document.getElementById("email-address").value;
  const confirmationText = document.querySelector(".conf-text p");
  const customerTicketName = document.querySelector(".customer-details h5");
  confirmationText.innerHTML = `We've emailed your ticket to <span>${email}</span> and will send updates in the run up to the event.`;
  customerTicketName.innerHTML = document.getElementById("full-name").value;

  // Set GitHub username if provided
  const githubInput = document.getElementById("github-acc").value;
  if (githubInput) {
    document.querySelector(".github-details h6").textContent =
      githubInput.startsWith("@") ? githubInput : `@${githubInput}`;
  }

  // Set date
  ticketDate();
}

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();

  // Run all validations
  const isAvatarValid = validateAvatar();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  // If all validations pass
  if (isAvatarValid && isNameValid && isEmailValid) {
    // Update confirmation section with form data
    updateConfirmation();

    // Show confirmation and hide form
    document.querySelector("form").style.display = "none";
    document.querySelector(".confirmation").style.display = "block";
  }
}

// Initialize the page
function init() {
  // Set up form submission
  document.querySelector("form").addEventListener("submit", handleFormSubmit);

  // Initialize email validation
  initEmailValidation();

  // Initially hide the confirmation section
  document.querySelector(".confirmation").style.display = "none";

  // Set initial date
  ticketDate();
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
