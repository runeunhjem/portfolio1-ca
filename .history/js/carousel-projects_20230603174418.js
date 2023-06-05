let imageUrls;
function createProjectContainer(projectId, title, tagline, description, imageUrls, links) {
  const container = document.createElement("div");
  container.className = "project-container flex-column";

  const projectTop = document.createElement("div");
  projectTop.className = "project-top flex";

  // Create and append the left section of the project top
  const projectTopLeft = document.createElement("div");
  projectTopLeft.className = "project-top-left flex";
  projectTop.appendChild(projectTopLeft);

  // Create and append the middle section of the project top
  const projectTopMiddle = document.createElement("div");
  projectTopMiddle.className = "project-top-middle flex-column";
  const projectTitle = document.createElement("h2");
  projectTitle.className = "project-title";
  projectTitle.textContent = title;
  const projectTagline = document.createElement("p");
  projectTagline.className = "project-tagline";
  projectTagline.textContent = tagline;
  projectTopMiddle.appendChild(projectTitle);
  projectTopMiddle.appendChild(projectTagline);
  projectTop.appendChild(projectTopMiddle);

  // Create and append the right section of the project top
  const projectTopRight = document.createElement("div");
  projectTopRight.className = "project-top-right flex";
  projectTop.appendChild(projectTopRight);

  container.appendChild(projectTop);

  // Create and append the project image carousel
  const projectImageCarousel = document.createElement("div");
  projectImageCarousel.className = "project-image-carousel flex";
  const leftArrow = document.createElement("div");
  leftArrow.className = "left-arrow flex";
  const leftArrowImage = document.createElement("img");
  leftArrowImage.className = "arrow left-arrow flex";
  leftArrowImage.src = "images/ico-chevron-left-dark.svg";
  leftArrowImage.alt = "Previous image";
  leftArrow.appendChild(leftArrowImage);

  // Create and append the images container
  const imagesContainer = document.createElement("div");
  imagesContainer.className = "images-container";
  const carouselImages = document.createElement("div");
  carouselImages.className = "carousel-images flex";
  carouselImages.id = "carousel-images";
  imagesContainer.appendChild(carouselImages);

  // Create and append the right arrow
  const rightArrow = document.createElement("div");
  rightArrow.className = "right-arrow flex";
  const rightArrowImage = document.createElement("img");
  rightArrowImage.className = "arrow right-arrow flex";
  rightArrowImage.src = "images/ico-chevron-right-dark.svg";
  rightArrowImage.alt = "Next image";
  rightArrow.appendChild(rightArrowImage);

  projectImageCarousel.appendChild(leftArrow);
  projectImageCarousel.appendChild(imagesContainer);
  projectImageCarousel.appendChild(rightArrow);

  container.appendChild(projectImageCarousel);

  // Create and append the project bottom section
  const projectBottom = document.createElement("div");
  projectBottom.className = "project-bottom flex-column";
  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent = description;
  projectBottom.appendChild(projectDescription);

  // Create and append the project links
  const projectLinks = document.createElement("div");
  projectLinks.className = "project-links flex";

  // Iterate over the links and create buttons
  for (const link of links) {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = link.label;
    button.addEventListener("click", function () {
      window.location.href = link.url;
    });

    projectLinks.appendChild(button);
  }

  projectBottom.appendChild(projectLinks);
  container.appendChild(projectBottom);

  return container;
}
// let imageUrls = 0;
const projectContainer = document.getElementById("project-container");
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
    { label: "Visit Game Hub", url: "https://runeunhjem.no/06-gamehub-wp-ca" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/gamehub-wp-ca" },
    { label: "Project README", url: "https://github.com/runeunhjem/gamehub-wp-ca/blob/main/README.md" },
  ]
);
projectContainer.innerHTML = project1Container.outerHTML;
// console.log(`projectContainers[currentProjectIndex].imageUrls: ${projectContainers[currentProjectIndex].imageUrls}`);
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
projectContainer.innerHTML += project2Container.outerHTML;

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
projectContainer.innerHTML += project3Container.outerHTML;

// Get the next and back buttons
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");

// Store the project containers in an array
const projectContainers = [project1Container, project2Container, project3Container];
console.log(`projectContainers[currentProjectIndex].imageUrls: ${projectContainers[currentProjectIndex].imageUrls}`);
function loadCurrentImage(imageUrls) {
  try {
    console.log(`projectContainers[currentProjectIndex].imageUrls: ${projectContainers[currentProjectIndex].imageUrls}`);
    const imagePath = "images/" + imageUrls[currentPosition];
    console.log(`projectContainers[currentProjectIndex].imageUrls: ${projectContainers[currentProjectIndex].imageUrls}`);
    carouselContainer.style.backgroundImage = `url(${imagePath})`;
  } catch (error) {
    console.error("Error loading image:", error);
  }
}

// Initialize the current project index
let currentProjectIndex = 0;
let currentPosition = 0;
let carouselContainer;
// let imageUrls;

// Function to update the displayed project
function updateDisplayedProject() {
  const projectContainer = document.getElementById("project-container");
  // Clear the existing content
  projectContainer.innerHTML = "";
  // Append the new project container
  projectContainer.appendChild(projectContainers[currentProjectIndex]);

  // Get the carousel container
  carouselContainer = document.getElementById("carousel-images");
}

// Function to initialize the carousel
function initializeCarousel() {
  // Get the carousel container
  carouselContainer = document.getElementById("carousel-images");

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    currentProjectIndex++;
    if (currentProjectIndex >= projectContainers.length) {
      currentProjectIndex = 0;
    }
    currentPosition = 0; // Reset the carousel position when switching projects
    // Set the imageUrls variable for the new project
    imageUrls = projectContainers[currentProjectIndex].imageUrls;
    loadCurrentImage();
  });

  backButton.addEventListener("click", function () {
    currentProjectIndex--;
    if (currentProjectIndex < 0) {
      currentProjectIndex = projectContainers.length - 1;
    }
    currentPosition = 0; // Reset the carousel position when switching projects
    // Set the imageUrls variable for the new project
    imageUrls = projectContainers[currentProjectIndex].imageUrls;
    console.log(`projectContainers[currentProjectIndex].imageUrls: ${projectContainers[currentProjectIndex].imageUrls}`);
    loadCurrentImage();
  });

  // Initially display the first project
  updateDisplayedProject();
  console.log(`projectContainers[currentProjectIndex].imageUrls: ${projectContainers[currentProjectIndex].imageUrls}`);

  // Set the imageUrls variable for the initial project
  imageUrls = projectContainers[currentProjectIndex].imageUrls;
  loadCurrentImage();

  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const imagesPerSlide = 1; // Number of images per slide

  leftArrow.addEventListener("click", () => {
    currentPosition--;
    if (currentPosition < 0) {
      currentPosition = imageUrls.length - 1;
    }

    loadCurrentImage();
  });

  rightArrow.addEventListener("click", () => {
    currentPosition++;
    if (currentPosition >= imageUrls.length) {
      currentPosition = 0;
    }

    loadCurrentImage();
  });
}

// Wait for the carousel container to be created
function waitForCarousel() {
  if (document.getElementById("carousel-images")) {
    initializeCarousel();
  } else {
    setTimeout(waitForCarousel, 100);
  }
}

waitForCarousel();
