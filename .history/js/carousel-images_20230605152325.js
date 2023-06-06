const imageUrls = {
  project1: [
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
  project2: [
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
  project3: [
    "chefs-table/ct-1.jpg",
    "chefs-table/ct-2.jpg",
    "chefs-table/ct-3.jpg",
    "chefs-table/ct-4.jpg",
    "chefs-table/ct-5.jpg",
    "chefs-table/ct-6.jpg",
    "chefs-table/ct-7.jpg",
    "chefs-table/ct-8.jpg",
  ],
};

function loadCurrentImage(container, slideDirection) {
  const projectContainer = container.closest(".carousel-item").querySelector(".project-container");
  const projectClass = projectContainer.classList.item(2);
  const position = parseInt(container.dataset.position);
  const imagePath = "images/" + imageUrls[projectClass][position];

  // Create a new image element
  const newImage = document.createElement("div");
  newImage.classList.add("image");
  newImage.style.backgroundImage = `url(${imagePath})`;

  // Apply slide-in animation
  newImage.style.transform = `translateX(${slideDirection === "left" ? 100 : -100}%)`;

  // Remove the previous image
  const previousImage = container.querySelector(".image");
  if (previousImage) {
    previousImage.remove();
  }

  // Append the new image
  container.appendChild(newImage);

  // Trigger reflow to ensure the animation is applied
  newImage.getBoundingClientRect();

  // Apply slide-out animation to the previous image
  if (previousImage) {
    previousImage.style.transform = `translateX(${slideDirection === "left" ? -100 : 100}%)`;
  }
}

function updateImageCounter(currentPosition, maxPosition) {
  const counter = document.querySelector(".image-counter .image-count");
  counter.textContent = `${currentPosition + 1}/${maxPosition + 1}`;
}

const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
let currentProjectIndex = 0;
const maxProjectIndex = carouselItems.length - 1;

function handleArrowClick(event) {
  const arrow = event.target;
  const carouselContainer = arrow.closest(".carousel-item").querySelector(".carousel-images");
  const currentPosition = parseInt(carouselContainer.dataset.position);
  const projectClass = carouselContainer.closest(".carousel-item").querySelector(".project-container").classList.item(2);

  let newPosition;

  if (arrow.classList.contains("left-arrow")) {
    newPosition = (currentPosition - 1 + imageUrls[projectClass].length) % imageUrls[projectClass].length;
    loadCurrentImage(carouselContainer, "left");
  } else if (arrow.classList.contains("right-arrow")) {

