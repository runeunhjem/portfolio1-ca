const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carouselContainer = document.getElementById("carousel-images");

const gameHubImageUrls = [
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
];
const csmImageUrls = [
  "csm/cms-1.jpg",
  "csm/cms-2.jpg",
  "csm/cms-3.jpg",
  "csm/cms-4.jpg",
  "csm/cms-5.jpg",
  "csm/cms-6.jpg",
  "csm/cms-7.jpg",
  "csm/cms-8.jpg",
  "csm/cms-9.jpg",
];
const chefsTableImageUrls = [
  "chefs-table/ct-1.jpg",
  "chefs-table/ct-2.jpg",
  "chefs-table/ct-3.jpg",
  "chefs-table/ct-4.jpg",
  "chefs-table/ct-5.jpg",
  "chefs-table/ct-6.jpg",
  "chefs-table/ct-7.jpg",
  "chefs-table/ct-8.jpg",
  "chefs-table/ct-9.jpg",
  "chefs-table/ct-10.jpg",
];
console.log(`imageUrls: ${imageUrls}`);
const imageCount = imageUrls.length;
const imagesPerSlide = 1; // Number of images per slide

function loadCurrentImage(imageUrls) {
  let currentPosition = 2;
  const imagePath = "images/" + imageUrls[currentPosition];
  carouselContainer.style.backgroundImage = `url(${imagePath})`;
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
