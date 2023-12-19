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
  project4: [
    "movietalk/mt-1.png",
    "movietalk/mt-2.png",
    "movietalk/mt-3.png",
    "movietalk/mt-4.png",
    "movietalk/mt-5.png",
    "movietalk/mt-6.png",
    "movietalk/mt-7.png",
    "movietalk/mt-8.png",
  ],
  project5: [
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
};
function preloadImages(imageUrls) {
  imageUrls.forEach((imageUrl) => {
    const img = new Image();
    img.src = "images/" + imageUrl;
  });
}

preloadImages(imageUrls.project1);
preloadImages(imageUrls.project2);
preloadImages(imageUrls.project3);
preloadImages(imageUrls.project4);
preloadImages(imageUrls.project5);

function loadCurrentImage(container) {
  const projectContainer = container.closest(".carousel-item").querySelector(".project-container");
  const projectClass = projectContainer.classList.item(2);
  const position = parseInt(container.dataset.position);
  const imagePath = "images/" + imageUrls[projectClass][position];
  container.style.transition = "background-image 0.3s ease-in-out";
  container.style.backgroundImage = `url(${imagePath})`;
}

const carouselContainers = document.querySelectorAll(".carousel-images");

carouselContainers.forEach((container) => {
  container.dataset.position = 0;
  loadCurrentImage(container);
});

const leftArrows = document.querySelectorAll(".left-arrow");
const rightArrows = document.querySelectorAll(".right-arrow");

function updateImageCounter(currentPosition, maxPosition, projectClass) {
  const projectContainer = document.querySelector(`.${projectClass}`);
  const counter = projectContainer.querySelector(".image-count");
  counter.innerText = `${currentPosition + 1}/${maxPosition + 1}`;
}

function handleArrowClick(event) {
  event.stopPropagation();
  const arrow = event.target;
  const carouselContainer = arrow.closest(".carousel-item").querySelector(".carousel-images");
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

  carouselContainer.dataset.position = newPosition;
  loadCurrentImage(carouselContainer);

  updateImageCounter(newPosition, maxPosition, projectClass);
}

leftArrows.forEach((arrow) => {
  arrow.addEventListener("click", handleArrowClick);
});

rightArrows.forEach((arrow) => {
  arrow.addEventListener("click", handleArrowClick);
});
