  const carouselContainer = document.getElementById("carousel-images");

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

  // Function to load the images and create the carousel
  function loadCarouselImages() {
    // Clear any existing images
    carouselContainer.innerHTML = "";

    // Loop through the image filenames and create carousel items
    imageFilenames.forEach((filename) => {
      const imagePath = "images/gamehub/" + filename;
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      carouselItem.style.backgroundImage = `url(${imagePath})`;
      carouselContainer.appendChild(carouselItem);
    });
  }

  // Call the loadCarouselImages function to initialize the carousel
  loadCarouselImages();
