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
const imagesPerSlide = 1; // Number of images per slide
let currentPosition = 0;

function loadCurrentImage(imageUrls) {
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

const project1Container = createProjectContainer(
  "project1",
  "Game Hub",
  "Buy and sell your games easily and affordably.",
  "Our very first school project. Only HTML and CSS were used, but it has later on been expanded to also involve Vanilla JS. No libraries or frameworks were used.",
  [
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
  ],
  [
    { label: "Visit Game Hub", url: "https://runeunhjem.no/06-gamehub-wp-ca" },
    { label: "GitHub Repository", url: "https://github.com/runeunhjem/gamehub-wp-ca" },
    { label: "Project README", url: "https://github.com/runeunhjem/gamehub-wp-ca/blob/main/README.md" },
  ]
);