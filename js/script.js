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
    flyInMenu.style.top = "-150%";
  } else {
    flyInMenu.style.top = "5em";
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

      switch (linkText) {
        case "Home":
          window.open("index.html", "_blank");
          break;
        case "About":
          window.open("about.html", "_blank");
          break;
        case "Contact":
          window.open("contact.html", "_blank");
          break;
        case "Visit Game Hub":
          window.open("https://gamehub-wp-ca.netlify.app/", "_blank");
          break;
        case "Visit CMS":
          window.open("https://csm-sp1.netlify.app/", "_blank");
          break;
        case "Visit Chef's Table":
          window.open("https://ru-project-exam-1.netlify.app/", "_blank");
          break;
        case "Visit movieTALK":
          window.open("https://js2-ca-js2-branch.netlify.app/", "_blank");
          break;
        case "Visit DreamBids":
          window.open("https://runeunhjem-sp2.netlify.app/", "_blank");
          break;
        case "Visit CGG":
          window.open("https://javascript-frameworks-ca-react.netlify.app/", "_blank");
          break;
        case "Visit Holidaze":
          window.open("https://rundev-holidaze.netlify.app/home", "_blank");
          break;
        case "My album on Spotify":
          window.open("https://open.spotify.com/artist/56ZSG2Q1JKydX5X9rTZxrq", "_blank");
          break;
        case "This is my TV":
          window.open("https://programming-foundations-ca-runeunhjem.netlify.app/", "_blank");
          break;
        case "IMDB API search":
          window.open("https://js1ca.netlify.app/", "_blank");
          break;
        case "Portfolio README":
          window.open("https://github.com/runeunhjem/portfolio1-ca/blob/main/README.md", "_blank");
          break;
        default:
          break;
      }
    });
  });
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
