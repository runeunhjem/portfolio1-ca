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

function loadCurrentImage(container) {
  const projectContainer = container.closest(".carousel-item").querySelector(".project-container");
  const projectClass = projectContainer.classList.item(2);
  const position = parseInt(container.dataset.position);
  const imagePath = "images/" + imageUrls[projectClass][position];
  container.style.backgroundImage = `url(${imagePath})`;
  // container.style.transform = `translateX(-${position * 100}%)`;
}

function showSlide(index) {
  const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
  const carouselContainer = carouselItems[index].querySelector(".project-image-carousel");
  const carouselImages = carouselContainer.querySelectorAll(".carousel-images");

  carouselImages.forEach((image) => {
    // Update the image styles or perform any desired actions
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
    // container.style.transform = `translateX(-${position * 100}%)`;
    loadCurrentImage
    console.log("Image:", image);
  });
}

const carouselContainers = document.querySelectorAll(".carousel-images");

carouselContainers.forEach((container) => {
  container.dataset.position = 0;
  loadCurrentImage(container);
});

const leftArrows = document.querySelectorAll(".left-arrow");
const rightArrows = document.querySelectorAll(".right-arrow");

function handleArrowClick(event) {
  const arrow = event.target;
  const carouselContainer = arrow.closest(".carousel-item").querySelector(".carousel-images");
  console.log("carouselContainer: ", carouselContainer);
  const currentPosition = parseInt(carouselContainer.dataset.position);
  const projectClass = carouselContainer.closest(".carousel-item").querySelector(".project-container").classList.item(2);
  const maxPosition = imageUrls[projectClass].length - 1;
  const slideDirection = arrow.classList.contains("left-arrow") ? "left" : "right";

  let newPosition;

  if (slideDirection === "left") {
    newPosition = (currentPosition - 1 + imageUrls[projectClass].length) % imageUrls[projectClass].length;
  } else if (slideDirection === "right") {
    newPosition = (currentPosition + 1) % imageUrls[projectClass].length;
  }

  // Call loadCurrentImage with slideDirection
  loadCurrentImage(carouselContainer, slideDirection);

  carouselContainer.dataset.position = newPosition;
}

leftArrows.forEach((arrow) => {
  arrow.addEventListener("click", handleArrowClick);
});

rightArrows.forEach((arrow) => {
  arrow.addEventListener("click", handleArrowClick);
});
