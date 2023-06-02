  const carouselContainer = document.getElementById("carousel-images");

  // Array of image filenames
  const imageFilenames = [
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    "gamehub-1.jpg",
    
    // Add more image filenames here
  ];

  // Function to create an <img> element with the specified source
  function createImageElement(src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Carousel Image";
    img.classList.add("carousel-image"); // Add any necessary CSS classes
    return img;
  }

  // Function to load the images and create the carousel
  function loadCarouselImages() {
    // Clear any existing images
    carouselContainer.innerHTML = "";

    // Loop through the image filenames and create <img> elements
    imageFilenames.forEach((filename) => {
      const imagePath = "images/gamehub/" + filename;
      const img = createImageElement(imagePath);
      carouselContainer.appendChild(img);
    });
  }

  // Call the loadCarouselImages function to initialize the carousel
  loadCarouselImages();
