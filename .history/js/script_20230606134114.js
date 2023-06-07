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
  const menuIsOpen = flyInMenu.style.right === "0px";

  if (menuIsOpen) {
    flyInMenu.style.right = "-300px"; // Close the menu
  } else {
    flyInMenu.style.right = "0"; // Open the menu
  }
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (targetElement !== hamburger && !flyInMenu.contains(targetElement)) {
    flyInMenu.style.right = "-150%";
  }
});

flyInMenu.addEventListener("click", (event) => {
  if (event.target.classList.contains("fly-in-item")) {
    const menuItemText = event.target.textContent;
    console.log(`Clicked menu item: ${menuItemText}`);
    flyInMenu.style.right = "-150%";
  }
});