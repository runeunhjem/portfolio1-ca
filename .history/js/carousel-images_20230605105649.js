const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carouselContainers = document.querySelectorAll(".carousel-images");

const imageUrls = {
  project1: [
    "gamehub/gamehub-1.jpg",
    "gamehub/gamehub-2.jpg",
    "gamehub/gamehub-3.jpg",
    "gamehub/gamehub-4.jpg",
    "gamehub/gamehub-5.jpg",
    "gamehub/gamehub-6.jpg",
    "gamehub/gamehub-7.jpg",
    "gamehub/gamehub-3.jpg",
    "gamehub/gamehub-3.jpg",

  ],
  project2: [
    "csm/cms-1.jpg",
    "csm/cms-2.jpg",
    "csm/cms-3.jpg",
    // ...rest of the image URLs for project2
  ],
  project3: [
    "chefs-table/ct-1.jpg",
    "chefs-table/ct-2.jpg",
    "chefs-table/ct-3.jpg",
    // ...rest of the image URLs for project3
  ],
};

function loadCurrentImage(projectClass, position) {
  const imagePath = "images/" + imageUrls[projectClass][position];
  carouselContainers.forEach((container) => {
    if (container.classList.contains(projectClass)) {
      container.style.backgroundImage = `url(${imagePath})`;
    }
  });
}

function handleArrowClick(event) {
  const arrow = event.target;
  const carouselContainer = arrow.closest(".project-container").querySelector(".carousel-images");
  const projectClass = carouselContainer.classList[2];

  let currentPosition = parseInt(carouselContainer.dataset.position);
  if (arrow.classList.contains("left-arrow")) {
    currentPosition--;
    if (currentPosition < 0) {
      currentPosition = imageUrls[projectClass].length - 1;
    }
  } else if (arrow.classList.contains("right-arrow")) {
    currentPosition++;
    if (currentPosition >= imageUrls[projectClass].length) {
      currentPosition = 0;
    }
  }

  carouselContainer.dataset.position = currentPosition;
  loadCurrentImage(projectClass, currentPosition);
}

leftArrow.addEventListener("click", handleArrowClick);
rightArrow.addEventListener("click", handleArrowClick);

// Initial load of the images
carouselContainers.forEach((container) => {
  const projectClass = container.classList[2];
  container.dataset.position = 0; // Set the initial position to 0
  loadCurrentImage(projectClass, 0);
});
