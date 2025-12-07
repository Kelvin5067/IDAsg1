document.addEventListener("DOMContentLoaded", () => {
  /* ===== Footer year ===== */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ===== Helper to toggle error styles ===== */
  function markError(field, hasError) {
    if (!field) return;
    if (hasError) {
      field.classList.add("input-error");
    } else {
      field.classList.remove("input-error");
    }
  }

  /* ===== FlexiWeb contact form (used on ALL pages) ===== */
  const enquiryForm = document.querySelector(".contact-form");

  if (enquiryForm) {
    const nameField = document.getElementById("enquiry-name");
    const emailField = document.getElementById("enquiry-email");
    const typeField = document.getElementById("enquiry-type");
    const messageField = document.getElementById("enquiry-message");

    enquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let hasError = false;

      // Name
      if (!nameField.value.trim()) {
        markError(nameField, true);
        hasError = true;
      } else {
        markError(nameField, false);
      }

      // Email email vlaidation included
      if (!emailField.value.trim() || !emailField.value.includes("@")) {
        markError(emailField, true);
        hasError = true;
      } else {
        markError(emailField, false);
      }

      // Enquiry type
      if (!typeField.value) {
        markError(typeField, true);
        hasError = true;
      } else {
        markError(typeField, false);
      }

      // Message
      if (!messageField.value.trim()) {
        markError(messageField, true);
        hasError = true;
      } else {
        markError(messageField, false);
      }

      // If any field is missing → stop
      if (hasError) {
        alert("Please fill in all the fields before submitting your enquiry.");
        return;
      }

      
      const confirmSubmit = confirm("Are you sure you want to submit your enquiry?");
      if (!confirmSubmit) {
        return; // Stop here if user clicks Cancel
      }

      // If user confirms → continue with success message
      const name = nameField.value.trim();
      const enquiryTypeText =
        typeField.value === "project"
          ? "request to start a project"
          : "general enquiry";

      alert(
        `Thank you, ${name}! Your ${enquiryTypeText} has been received by FlexiWeb. We will get back to you within 3 working days`
      );

      enquiryForm.reset();
      [nameField, emailField, typeField, messageField].forEach((f) =>
        markError(f, false)
      );
    });
  }
});
