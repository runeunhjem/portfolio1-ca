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
  const nameAfter = document.querySelector(".name-after");
  const emailAfter = document.querySelector(".email-after");
  const subjectAfter = document.querySelector(".subject-after");
  const messageAfter = document.querySelector(".message-after");
  let formSubmitted = false;

  contactName.addEventListener("focus", function () {
    contactName.placeholder = "Min 5 characters";
  });
  contactName.addEventListener("blur", function () {
    contactName.placeholder = "Your Name";
  });
  contactEmail.addEventListener("focus", function () {
    contactEmail.placeholder = "Valid email format (john.doe@mail.com)";
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
      contactName.classList.add("input-validated");
      nameAfter.classList.add("show-checkmark");
      nameAfter.classList.add("validated");
      
      contactEmailError.style.display = "none";
      contactEmail.style.border = "2px solid #a3ffaa";
      contactEmail.style.color = "#a3ffaa";
      emailAfter.classList.add("show-checkmark");
    } else {
      // contactEmailError.style.display = "block";
      emailAfter.innerText = contactEmailError.innerText;
      // contactEmail.style.backgroundColor = "#fafad2";
      emailAfter.classList.remove("show-checkmark");
      contactEmail.style.color = "#FF0000";
    }
    if (checkLength(contactSubject.value, 14)) {
      contactSubjectError.style.display = "none";
      contactSubject.style.border = "2px solid #a3ffaa";
      contactSubject.style.color = "#a3ffaa";
      subjectAfter.classList.add("show-checkmark");
    } else {
      // contactSubjectError.style.display = "block";
      subjectAfter.innerText = contactSubjectError.innerText;
      // contactSubject.style.backgroundColor = "#fafad2";
      messageAfter.classList.remove("show-checkmark");
      contactSubject.style.color = "#FF0000";
    }
    if (checkLength(contactContent.value, 24)) {
      contactContentError.style.display = "none";
      contactContent.style.border = "2px solid #a3ffaa";
      contactContent.style.color = "#a3ffaa";
      messageAfter.classList.add("show-checkmark");

    } else {
      // contactContentError.style.display = "block";
      messageAfter.innerText = contactContentError.innerText;
      // contactContent.style.backgroundColor = "#fafad2";
      contactContent.style.color = "#FF0000";
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
      sendMessageButton.classList.add("buttonSuccess");
      sendMessageButton.addEventListener("click", successMessage);
      // nameAfter.classList.add("show-checkmark");
      // emailAfter.classList.add("show-checkmark");
      // subjectAfter.classList.add("show-checkmark");
      // messageAfter.classList.add("show-checkmark");
    } else {
      sendMessageButton.innerText = "Send Message";
      confirmSuccess.style.display = "none";
      // nameAfter.classList.remove("show-checkmark");
      // emailAfter.classList.remove("show-checkmark");
      // subjectAfter.classList.remove("show-checkmark");
      // messageAfter.classList.remove("show-checkmark");
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
