document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector("#back-button");
  const nextButton = document.querySelector("#next-button");
  const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));

  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

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

  carousel.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const touchDiff = touchStartX - touchEndX;
    if (touchDiff > 50) {
      goToNextSlide();
    } else if (touchDiff < -50) {
      goToPrevSlide();
    }
  }

  prevButton.addEventListener("click", goToPrevSlide);
  nextButton.addEventListener("click", goToNextSlide);
});

function createProjectContainer(projectClass, title, tagline, description, images, links) {
  const projectContainer = document.querySelector(`.${projectClass}`);
  const projectLinks = projectContainer.querySelector(".project-links");

  const buttons = links.map((link) => {
    const button = document.createElement("button");
    button.classList.add("button", `button-${projectClass}`);
    button.textContent = link.label;
    button.addEventListener("click", () => {
      window.open(link.url, "_blank");
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

const project4Container = createProjectContainer(
  "project4",
  "movieTALK",
  "Lets talk movies!",
  "JavaScript 2 Course Assignment. You have been tasked with producing a new JavaScript front-end client for an existing social media platform. The client application must be attractive and responsive, but you have an otherwise blank slate in terms of theme design language.",
  [
    "movietalk/mt-1.jpg",
    "movietalk/mt-2.png",
    "movietalk/mt-3.png",
    "movietalk/mt-4.png",
    "movietalk/mt-5.png",
    "movietalk/mt-6.png",
    "movietalk/mt-7.png",
    "movietalk/mt-8.png",
  ],
  [
    { label: "Visit movieTALK", url: "https://js2-ca-js2-branch.netlify.app/" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/js2-ca" },
    { label: "Project README", url: "https://github.com/runeunhjem/js2-ca/blob/js2/README.md" },
  ]
);

const project5Container = createProjectContainer(
  "project5",
  "DreamBids",
  "Find That Dreamy Item!",
  "An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction. Vanilla JS, Bootstrap and Sass were primaries on this project.JavaScript 2 Course Assignment. You have been tasked with producing a new JavaScript front-end client for an existing social media platform. The client application must be attractive and responsive, but you have an otherwise blank slate in terms of theme design language.",
  [
    "dreambids/db-1.png",
    "dreambids/db-2.png",
    "dreambids/db-3.png",
    "dreambids/db-4.png",
    "dreambids/db-5.png",
    "dreambids/db-6.png",
    "dreambids/db-7.png",
    "dreambids/db-8.png",
    "dreambids/db-9.png",
    "dreambids/db-10.png",
  ],
  [
    { label: "Visit DreamBids", url: "https://runeunhjem-sp2.netlify.app/" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/semester-project-2" },
    { label: "Project README", url: "https://github.com/runeunhjem/semester-project-2/blob/main/README.md" },
  ]
);

const project6Container = createProjectContainer(
  "project6",
  "CGG",
  "Online Shopping",
  "The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.",
  [
    "cgg/cgg-1.png",
    "cgg/cgg-2.png",
    "cgg/cgg-3.png",
    "cgg/cgg-4.png",
    "cgg/cgg-5.png",
    "cgg/cgg-6.png",
    "cgg/cgg-7.png",
    "cgg/cgg-8.png",
    "cgg/cgg-9.png",
    "cgg/cgg-10.png",
  ],
  [
    { label: "Visit CGG", url: "https://runeunhjem-sp2.netlify.app/" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/javascript-frameworks-ca-react" },
    { label: "Project README", url: "https://github.com/runeunhjem/javascript-frameworks-ca-react/blob/main/README.md" },
  ]
);

const project7Container = createProjectContainer(
  "project7",
  "Holidaze",
  "Travels made easy!",
  "A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified.",
  [
    "holidaze/hd-01.png",
    "holidaze/hd-02.png",
    "holidaze/hd-03.png",
    "holidaze/hd-04.png",
    "holidaze/hd-05.png",
    "holidaze/hd-06.png",
    "holidaze/hd-07.png",
    "holidaze/hd-08.png",
    "holidaze/hd-09.png",
    "holidaze/hd-10.png",
    "holidaze/hd-11.png",
    "holidaze/hd-12.png",
    "holidaze/hd-13.png",
  ],
  [
    { label: "Visit Holidaze", url: "https://runeunhjem-sp2.netlify.app/" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/holidaze" },
    { label: "Project README", url: "https://github.com/runeunhjem/holidaze/blob/main/README.md" },
  ]
);