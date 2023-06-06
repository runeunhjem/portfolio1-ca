document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector("#back-button");
  const nextButton = document.querySelector("#next-button");
  const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));

  let currentIndex = 0;

  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateCounter(index);
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }

  function updateCounter(index) {
    const counter = document.querySelector(".count");
    counter.textContent = `${index + 1}/${carouselItems.length}`;
  }

  prevButton.addEventListener("click", goToPrevSlide);
  nextButton.addEventListener("click", goToNextSlide);

  const projectsCarouselNav = document.querySelector(".projects-carousel-nav");
  const projectsContainer = document.querySelector(".projects-container");
  const clonedNav = projectsCarouselNav.cloneNode(true);
  clonedNav.classList.add("cloned-nav");
  document.body.appendChild(clonedNav);

  function updateClonedNavPosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const projectsContainerTop = projectsContainer.getBoundingClientRect().top + scrollTop;
    if (scrollTop >= projectsContainerTop) {
      clonedNav.style.display = "flex";
      clonedNav.style.position = "fixed";
      clonedNav.style.top = "0";
      clonedNav.style.left = "0";
      clonedNav.style.right = "0";
      clonedNav.style.backgroundColor = "white";
      clonedNav.style.zIndex = "1000";
    } else {
      clonedNav.style.display = "none";
    }
  }

  window.addEventListener("scroll", updateClonedNavPosition);
  window.addEventListener("resize", updateClonedNavPosition);
});

function createProjectContainer(projectClass, title, tagline, description, images, links) {
  const projectContainer = document.querySelector(`.${projectClass}`);
  const projectLinks = projectContainer.querySelector(".project-links");

  const buttons = links.map((link) => {
    const button = document.createElement("button");
    button.classList.add("button", `button-${projectClass}`);
    button.textContent = link.label;
    button.addEventListener("click", () => {
      window.location.href = link.url;
    });
    return button;
  });

  projectLinks.innerHTML = "";
  buttons.forEach((button) => {
  projectLinks.appendChild(button);
  });

  return projectContainer;
}

// PROJECTS
const project1Container = createProjectContainer(
  "project1",
  "Game Hub",
  "Buy and sell your games easily and affordably.",
  "Our very first school project. Only HTML and CSS were used, but it has later on been expanded to also involve Vanilla JS. No libraries or frameworks were used.",
  [
    "gamehub/gamehub-1.jpg",
    "gamehub/gamehub-2.jpg",
    "gamehub/gamehub-3.jpg",
    "gamehub/gamehub-4.jpg",
    "gamehub/gamehub-5.jpg",
    "gamehub/gamehub-6.jpg",
    "gamehub/gamehub-7.jpg",
    "gamehub/gamehub-8.jpg",
    "gamehub/gamehub-9.jpg",
    "gamehub/gamehub-10.jpg",
  ],
  [
    { label: "Visit Game Hub", url: "https://gamehub-wp-ca.netlify.app/" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/gamehub-wp-ca" },
    { label: "Project README", url: "https://github.com/runeunhjem/gamehub-wp-ca/blob/main/README.md" },
  ]
);

const project2Container = createProjectContainer(
  "project2",
  "CSM",
  "The Community Science Museum.",
  "Semester Project 1. The site should appeal to youngsters, and take for granted that the audience is curious and intelligent. Only HTML and CSS were used here. No libraries or frameworks were used.",
  [
    "csm/cms-1.jpg",
    "csm/cms-2.jpg",
    "csm/cms-3.jpg",
    "csm/cms-4.jpg",
    "csm/cms-5.jpg",
    "csm/cms-6.jpg",
    "csm/cms-7.jpg",
    "csm/cms-8.jpg",
    "csm/cms-9.jpg",
  ],
  [
    { label: "Visit CSM", url: "https://csm-sp1.netlify.app" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/csm" },
    { label: "Project README", url: "https://github.com/runeunhjem/csm/blob/main/README.md" },
  ]
);

const project3Container = createProjectContainer(
  "project3",
  "CHEF'S TABLE",
  "Cooking With Love.",
  "Project Exam 1. Make a blog for a fictional restaurant. The site should be responsive, and the audience is assumed to be people who are interested in food and cooking. Made with HTML, CSS, and JS. No libraries or frameworks were used.",
  [
    "chefs-table/ct-1.jpg",
    "chefs-table/ct-2.jpg",
    "chefs-table/ct-3.jpg",
    "chefs-table/ct-4.jpg",
    "chefs-table/ct-5.jpg",
    "chefs-table/ct-6.jpg",
    "chefs-table/ct-7.jpg",
    "chefs-table/ct-8.jpg",
  ],
  [
    { label: "Visit Chef's Table", url: "https://ru-project-exam-1.netlify.app" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/07-ru-project-exam-1-chefs-table" },
    { label: "Project README", url: "https://github.com/runeunhjem/07-ru-project-exam-1-chefs-table/blob/main/README.md" },
  ]
);