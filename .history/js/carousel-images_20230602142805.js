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
const imagesPerSlide = 1; // Number of images per slide
let currentPosition = 0;

function loadCurrentImages() {
  carouselContainer.innerHTML = "";

  const startIndex = currentPosition;
  const endIndex = currentPosition + imagesPerSlide;

  for (let i = startIndex; i < endIndex; i++) {
    const imageIndex = i % imageCount;
    const imagePath = "images/gamehub/" + imageFilenames[imageIndex];
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Carousel Image";
    carouselContainer.appendChild(img);
  }

  const translationValue = (-currentPosition * 100) / imagesPerSlide;
  carouselContainer.style.transform = `translateX(${translationValue}%)`;
}


leftArrow.addEventListener("click", () => {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = imageCount - 1;
  }

  loadCurrentImages();
});

rightArrow.addEventListener("click", () => {
  currentPosition++;
  if (currentPosition >= imageCount) {
    currentPosition = 0;
  }

  loadCurrentImages();
});

loadCurrentImages();
