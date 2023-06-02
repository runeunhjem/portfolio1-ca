const carouselContainer = document.getElementById("carousel-images");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const imageFilenames = [
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
];

let currentIndex = 0;

function loadCurrentImage() {
  const imagePath = "images/gamehub/" + imageFilenames[currentIndex];
  carouselContainer.style.backgroundImage = `url(${imagePath})`;
}

function goToNextImage() {
  const nextIndex = (currentIndex + 1) % imageFilenames.length;
  const nextImagePath = "images/gamehub/" + imageFilenames[nextIndex];

  carouselContainer.classList.add("slide-left");
  carouselContainer.style.backgroundImage = `url(${nextImagePath})`;

  setTimeout(() => {
    currentIndex = nextIndex;
    carouselContainer.classList.remove("slide-left");
  }, 300); // Adjust the transition duration to match your CSS
}

function goToPreviousImage() {
  const previousIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
  const previousImagePath = "images/gamehub/" + imageFilenames[previousIndex];

  carouselContainer.classList.add("slide-right");
  carouselContainer.style.backgroundImage = `url(${previousImagePath})`;

  setTimeout(() => {
    currentIndex = previousIndex;
    carouselContainer.classList.remove("slide-right");
  }, 300); // Adjust the transition duration to match your CSS
}

leftArrow.addEventListener("click", goToPreviousImage);
rightArrow.addEventListener("click", goToNextImage);

loadCurrentImage();
