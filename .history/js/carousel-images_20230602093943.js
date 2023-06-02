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
   carouselContainer.classList.add("slide-left");

   setTimeout(() => {
     currentIndex = (currentIndex + 1) % imageFilenames.length;
     loadCurrentImage();
     carouselContainer.classList.remove("slide-left");
   }, 500); // Adjust the transition duration to match your CSS
 }

  function goToPreviousImage() {
   carouselContainer.classList.add("slide-right");

   setTimeout(() => {
     currentIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
     loadCurrentImage();
     carouselContainer.classList.remove("slide-right");
   }, 500); // Adjust the transition duration to match your CSS
 }

  leftArrow.addEventListener("click", goToPreviousImage);
  rightArrow.addEventListener("click", goToNextImage);

  loadCurrentImage();
