function validateContactForm() {
  const contactForm = document.getElementById("contact-form");
  const sendMessageButton = document.getElementById("send-message");
  const contactName = document.getElementById("your-name");
  const contactNameError = document.getElementById("name-input-error");
  const contactEmail = document.getElementById("your-email");
  const contactEmailError = document.getElementById("email-input-error");
  const contactSubject = document.getElementById("your-subject");
  const contactSubjectError = document.getElementById("subject-input-error");
  const contactContent = document.getElementById("your-message");
  const contactContentError = document.getElementById("message-input-error");
  const confirmSuccess = document.getElementById("message-sent");
  const nameAfter = document.getElementById("name-after");
  const emailAfter = document.getElementById("email-after");
  const subjectAfter = document.getElementById("subject-after");
  const messageAfter = document.getElementById("message-after");
  let formSubmitted = false;

  contactName.addEventListener("focus", function () {
    contactName.placeholder = "Min 5 characters";
  });
  contactName.addEventListener("blur", function () {
    contactName.placeholder = "Your Name";
  });
  contactEmail.addEventListener("focus", function () {
    contactEmail.placeholder = "Valid email (john.doe@mail.com)";
  });
  contactEmail.addEventListener("blur", function () {
    contactEmail.placeholder = "Your Email";
  });
  contactSubject.addEventListener("focus", function () {
    contactSubject.placeholder = "Min 10 characters";
  });
  contactSubject.addEventListener("blur", function () {
    contactSubject.placeholder = "What's the subject?";
  });
  contactContent.addEventListener("focus", function () {
    contactContent.placeholder = "Min 25 characters";
  });
  contactContent.addEventListener("blur", function () {
    contactContent.placeholder = "Your Message";
  });

  function validateForm(event) {
    event.preventDefault();

    if (checkLength(contactName.value, 4)) {
      contactName.classList.add("input-validated");
      nameAfter.classList.add("show-checkmark");
      nameAfter.classList.add("validated");
    } else {
      // contactNameError.style.display = "block";
      nameAfter.innerText = contactNameError.innerText;
      contactName.classList.remove("input-validated");
      nameAfter.classList.remove("show-checkmark");
      nameAfter.classList.remove("validated");
    }
    if (validateEmail(contactEmail.value)) {
      contactEmail.classList.add("input-validated");
      emailAfter.classList.add("show-checkmark");
      emailAfter.classList.add("validated");
    } else {
      emailAfter.innerText = contactEmailError.innerText;
      contactEmail.classList.remove("input-validated");
      emailAfter.classList.remove("show-checkmark");
      emailAfter.classList.remove("validated");
    }
    if (checkLength(contactSubject.value, 14)) {
      contactSubject.classList.add("input-validated");
      subjectAfter.classList.add("show-checkmark");
      subjectAfter.classList.add("validated");
    } else {
      subjectAfter.innerText = contactSubjectError.innerText;
      contactSubject.classList.remove("input-validated");
      subjectAfter.classList.remove("show-checkmark");
      subjectAfter.classList.remove("validated");
    }
    if (checkLength(contactContent.value, 24)) {
      contactContent.classList.add("input-validated");
      messageAfter.classList.add("show-checkmark");
      messageAfter.classList.add("validated");
    } else {
      messageAfter.innerText = contactContentError.innerText;
      contactContent.classList.remove("input-validated");
      messageAfter.classList.remove("show-checkmark");
      messageAfter.classList.remove("validated");
    }
    if (
      checkLength(contactName.value, 4) &&
      validateEmail(contactEmail.value) &&
      checkLength(contactSubject.value, 14) &&
      checkLength(contactContent.value, 24)
    ) {
      sendMessageButton.setAttribute("type", "submit");
      sendMessageButton.style.cursor = "pointer";
      sendMessageButton.innerText = "Send Message";
      // sendMessageButton.classList.add("buttonSuccess");
      sendMessageButton.addEventListener("click", successMessage);
    } else {
      sendMessageButton.innerText = "Send Message";
      sendMessageButton.setAttribute("type", "button");
      confirmSuccess.style.display = "none";
    }
  }
  contactForm.addEventListener("submit", function (event) {
    formSubmitted = true;
    validateForm(event);
  });

  contactName.addEventListener("input", validateForm);
  contactEmail.addEventListener("input", validateForm);
  contactSubject.addEventListener("input", validateForm);
  contactContent.addEventListener("input", validateForm);
  sendMessageButton.addEventListener("click", validateForm);

  function successMessage() {
    const confirmSuccess = document.getElementById("message-sent");
    confirmSuccess.style.display = "block";
    confirmSuccess.innerHTML = `
    <p class="success">Your message was sent successfully</p>
    `;
    setTimeout(closeSuccessMessage, 4000);
  }

  function closeSuccessMessage() {
    location.reload();
  }
  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }
}

export { validateContactForm };
