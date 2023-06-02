const projectContainer = document.getElementById("project-container");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

// Function to create the project container element
function createProjectContainer(projectId) {
  const container = document.createElement("div");
  container.className = "project-container flex-column";
  container.id = projectId;

  // Project top
  const projectTop = document.createElement("div");
  projectTop.className = "project-top flex";

  const projectTopLeft = document.createElement("div");
  projectTopLeft.className = "project-top-left flex";
  projectTop.appendChild(projectTopLeft);

  const projectTopMiddle = document.createElement("div");
  projectTopMiddle.className = "project-top-middle flex-column";
  projectTop.appendChild(projectTopMiddle);

  const projectTitle = document.createElement("h2");
  projectTitle.className = "project-title";
  projectTitle.textContent = "Game Hub";
  projectTopMiddle.appendChild(projectTitle);

  const projectTagline = document.createElement("p");
  projectTagline.className = "project-tagline";
  projectTagline.textContent = "Buy and sell your games easily and affordable.";
  projectTopMiddle.appendChild(projectTagline);

  const projectTopRight = document.createElement("div");
  projectTopRight.className = "project-top-right flex";
  projectTop.appendChild(projectTopRight);

  container.appendChild(projectTop);

  // Project image carousel
  const projectImageCarousel = document.createElement("div");
  projectImageCarousel.className = "project-image-carousel flex";

  const leftArrow = document.createElement("div");
  leftArrow.className = "left-arrow flex";

  const leftArrowImage = document.createElement("img");
  leftArrowImage.className = "arrow left-arrow flex";
  leftArrowImage.src = "images/ico-chevron-left-dark.svg";
  leftArrowImage.alt = "Previous image";
  leftArrow.appendChild(leftArrowImage);

  projectImageCarousel.appendChild(leftArrow);

  const imagesContainer = document.createElement("div");
  imagesContainer.className = "images-container";

  const carouselImages = document.createElement("div");
  carouselImages.className = "carousel-images flex";
  carouselImages.id = "carousel-images";
  imagesContainer.appendChild(carouselImages);

  projectImageCarousel.appendChild(imagesContainer);

  const rightArrow = document.createElement("div");
  rightArrow.className = "right-arrow flex";

  const rightArrowImage = document.createElement("img");
  rightArrowImage.className = "arrow right-arrow flex";
  rightArrowImage.src = "images/ico-chevron-right-dark.svg";
  rightArrowImage.alt = "Next image";
  rightArrow.appendChild(rightArrowImage);

  projectImageCarousel.appendChild(rightArrow);

  container.appendChild(projectImageCarousel);

  // Project bottom
  const projectBottom = document.createElement("div");
  projectBottom.className = "project-bottom flex-column";

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent =
    "Our very first school project. Only HTML and CSS was used, but it has later on been expanded to also involve Vanilla JS. No libraries or frameworks were used.";
  projectBottom.appendChild(projectDescription);

  const projectLinks = document.createElement("div");
  projectLinks.className = "project-links flex";

  const leftButton = document.createElement("button");
  leftButton.className = "button";
  leftButton.id = "left-button";
  leftButton.textContent = "Visit Game Hub";
  projectLinks.appendChild(leftButton);

  const rightButton = document.createElement("button");
  rightButton.className = "button";
  rightButton.id = "right-button";
  rightButton.textContent = "GitHub Repository";
  projectLinks.appendChild(rightButton);

  const projectInfoButton = document.createElement("button");
  projectInfoButton.className = "button project-info flex";
  projectInfoButton.textContent = "Project README";
  projectLinks.appendChild(projectInfoButton);

  projectBottom.appendChild(projectLinks);
  container.appendChild(projectBottom);

  return container;
}

// Function to switch project content
function switchProject(projectId) {
  // Remove existing project content
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.firstChild);
  }

  // Create and append new project content
  const newProject = createProjectContainer(projectId);
  projectContainer.appendChild(newProject);
}

// Event listeners for back and next buttons
backButton.addEventListener("click", function () {
  switchProject("previous");
});

nextButton.addEventListener("click", function () {
  switchProject("next");
});

