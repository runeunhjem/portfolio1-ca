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
  const projectToggle = document.querySelector(".project-toggle");
  const otherProjectToggle = document.querySelector(".other-project-toggle");
  const projectList = document.querySelector(".project-list");
  const otherProjectList = document.querySelector(".other-project-list");

  projectToggle.addEventListener("click", function () {
    projectList.classList.toggle("show");
    projectList.style.maxHeight = projectList.classList.contains("show") ? projectList.scrollHeight + "px" : 0;
  });

  otherProjectToggle.addEventListener("click", function () {
    otherProjectList.classList.toggle("show");
    otherProjectList.style.maxHeight = otherProjectList.classList.contains("show")
      ? otherProjectList.scrollHeight + "px"
      : 0;
  });

  const menuItems = document.querySelectorAll(".fly-in-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const linkText = this.textContent;

      // Handle different link texts and their corresponding URLs
      switch (linkText) {
        case "Home":
          window.location.href = "index.html";
          break;
        case "About":
          window.location.href = "about.html";
          break;
        case "Contact":
          window.location.href = "contact.html";
          break;
        case "Visit Game Hub":
          window.location.href = "https://gamehub-wp-ca.netlify.app/";
          break;
        case "Visit CMS":
          window.location.href = "https://csm-sp1.netlify.app/";
          break;
        case "Visit Chef's Table":
          window.location.href = "https://ru-project-exam-1.netlify.app/";
          break;
        case "My album on Spotify":
          window.location.href = "https://open.spotify.com/artist/56ZSG2Q1JKydX5X9rTZxrq";
          break;
        case "This is my TV":
          window.location.href = "https://programming-foundations-ca-runeunhjem.netlify.app/";
          break;
        case "IMDB API search":
          window.location.href = "https://js1ca.netlify.app/";
          break;
        case "Portfolio README":
          window.location.href = "https://github.com/runeunhjem/portfolio1-ca/blob/main/README.md";
          break;
        default:
          break;
      }
    });
  });
});
