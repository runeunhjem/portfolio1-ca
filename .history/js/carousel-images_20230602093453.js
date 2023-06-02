  const carouselContainer = document.getElementById("carousel-images");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // Array of image filenames
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

  // Index of the currently displayed image
  let currentIndex = 0;

  // Function to load the currently displayed image
  function loadCurrentImage() {
    const imagePath = "images/gamehub/" + imageFilenames[currentIndex];
    carouselContainer.style.backgroundImage = `url(${imagePath})`;
  }

  function goToNextImage() {
    currentIndex = (currentIndex + 1) % imageFilenames.length;
    loadCurrentImage();
  }

  function goToPreviousImage() {
    currentIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
    loadCurrentImage();
  }

  leftArrow.addEventListener("click", goToPreviousImage);
  rightArrow.addEventListener("click", goToNextImage);

  loadCurrentImage();
