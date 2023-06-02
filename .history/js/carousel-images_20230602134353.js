const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carouselContainer = document.getElementById("carousel-images");

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
const imageCount = imageFilenames.length;
const cardWidthClick = 800; // Width of each image card in pixels
const imagesPerSlide = 1; // Number of images per slide

let currentPosition = 0;

function loadCurrentImage() {
  const imagePath = "images/gamehub/" + imageFilenames[currentPosition];
  carouselContainer.style.backgroundImage = `url(${imagePath})`;
}

leftArrow.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
    carouselContainer.style.transform = `translateX(-${currentPosition * cardWidthClick}px)`;
  } else {
    currentPosition = imageCount - 1;
    carouselContainer.style.transform = `translateX(-${currentPosition * cardWidthClick}px)`;
  }

  loadCurrentImage();
});

rightArrow.addEventListener("click", () => {
  if (currentPosition < imageCount - 1) {
    currentPosition++;
    carouselContainer.style.transform = `translateX(-${currentPosition * cardWidthClick}px)`;
  } else {
    currentPosition = 0;
    carouselContainer.style.transform = "translateX(0)";
  }

  loadCurrentImage();
});

loadCurrentImage();
