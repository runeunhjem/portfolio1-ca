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

