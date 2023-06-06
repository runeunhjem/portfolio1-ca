const buttons = document.querySelectorAll('.nav-button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Determine the target page based on the button index
    let targetPage;
    if (index === 0) {
      targetPage = 'index.html';
    } else if (index === 1) {
      targetPage = 'about.html';
    } else if (index === 2) {
      targetPage = 'contact.html';
    }

    // Navigate to the target page
    if (targetPage) {
      window.location.href = targetPage;
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const flyInMenu = document.querySelector(".fly-in-menu");

hamburger.addEventListener("click", () => {
  flyInMenu.style.left = "0";
});

flyInMenu.addEventListener("click", (event) => {
  // Check if the clicked element is a menu item
  if (event.target.classList.contains("fly-in-item")) {
    // Perform the desired action for the clicked menu item
    const menuItemText = event.target.textContent;
    console.log(`Clicked menu item: ${menuItemText}`);

    // Close the fly-in menu after performing the action
    flyInMenu.style.left = "-300px";
  }
});
