const buttons = document.querySelectorAll(".nav-button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let targetPage;
    if (index === 0) {
      targetPage = "index.html";
    } else if (index === 1) {
      targetPage = "about.html";
    } else if (index === 2) {
      targetPage = "contact.html";
    }

    if (targetPage) {
      window.location.href = targetPage;
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const flyInMenu = document.querySelector(".fly-in-menu");

hamburger.addEventListener("click", () => {
  const menuIsOpen = flyInMenu.style.top > "0px";

  if (menuIsOpen) {
    flyInMenu.style.top = "-150%"; // Close the menu
  } else {
    flyInMenu.style.top = "5em"; // Open the menu
  }
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (targetElement !== hamburger && !flyInMenu.contains(targetElement)) {
    flyInMenu.style.top = "-150%";
  }
});

flyInMenu.addEventListener("click", (event) => {
  if (event.target.classList.contains("fly-in-item")) {
    const menuItemText = event.target.textContent;
    console.log(`Clicked menu item: ${menuItemText}`);
    flyInMenu.style.top = "-150%";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const projectToggle = document.querySelectorAll(".project-toggle");
  const projectList = document.querySelectorAll(".project-list");
  // const otherProjectList = document.querySelector(".other-project-list");

  projectToggle.addEventListener("click", function () {
    projectList.classList.toggle("show");
    otherProjectList.classList.toggle("show");
  });
});

