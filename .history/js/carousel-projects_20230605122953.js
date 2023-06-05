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
});

// PROJECTS
const project1Container = createProjectContainer(
  "project1",
  "Game Hub",
  "Buy and sell your games easily and affordably.",
  "Our very first school project. Only HTML and CSS were used, but it has later on been expanded to also involve Vanilla JS. No libraries or frameworks were used.",
  [
    "gamehub-1.jpg",
    "gamehub-2.jpg",
    "gamehub-3.jpg",
    "gamehub-4.jpg",
    "gamehub-5.jpg",
    "gamehub-6.jpg",
    "gamehub-7.jpg",
    "gamehub-8.jpg",
    "gamehub-9.jpg",
    "gamehub-10.jpg",
  ],
  [
    { label: "Visit Game Hub", url: "https://runeunhjem.no/06-gamehub-wp-ca" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/gamehub-wp-ca" },
    { label: "Project README", url: "https://github.com/runeunhjem/gamehub-wp-ca/blob/main/README.md" },
  ]
);

const project2Container = createProjectContainer(
  "project2",
  "CSM",
  "The Community Science Museum.",
  "Semester Project 1. The site should appeal to youngsters, and take for granted that the audience is curious and intelligent. Only HTML and CSS were used here. No libraries or frameworks were used.",
  ["cms-1.jpg", "cms-2.jpg", "cms-3.jpg", "cms-4.jpg", "cms-5.jpg", "cms-6.jpg", "cms-7.jpg", "cms-8.jpg", "cms-9.jpg"],
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
  ["ct-1.jpg", "ct-2.jpg", "ct-3.jpg", "ct-4.jpg", "ct-5.jpg", "ct-6.jpg", "ct-7.jpg", "ct-8.jpg"],
  [
    { label: "Visit Project 3", url: "https://ru-project-exam-1.netlify.app" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/07-ru-project-exam-1-chefs-table" },
    { label: "Project README", url: "https://github.com/runeunhjem/07-ru-project-exam-1-chefs-table/blob/main/README.md" },
  ]
);