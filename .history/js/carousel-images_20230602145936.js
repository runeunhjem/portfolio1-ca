const leftArrow = document.querySelector(".left-arrow img");
const rightArrow = document.querySelector(".right-arrow img");
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
let currentPosition = 0;

function loadCurrentImage() {
  const imagePath = "images/gamehub/" + imageFilenames[currentPosition];
  const carouselImage = document.getElementById("carousel-images");
  const previousImage = document.querySelector(".carousel-images.previous");
  const nextImage = document.querySelector(".carousel-images.next");

  previousImage.classList.remove("previous");
  carouselImage.classList.add("previous");
  nextImage.classList.remove("next");
  carouselImage.classList.add("next");

  carouselImage.style.backgroundImage = `url(${imagePath})`;
}

leftArrow.addEventListener("click", () => {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = imageCount - 1;
  }

  loadCurrentImage();
});

rightArrow.addEventListener("click", () => {
  currentPosition++;
  if (currentPosition >= imageCount) {
    currentPosition = 0;
  }

  loadCurrentImage();
});

loadCurrentImage();
