const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
// const carouselContainers = document.querySelectorAll(".carousel-images");

// const imageUrls = [
//   [
//     "gamehub/gamehub-1.jpg",
//     "gamehub/gamehub-2.jpg",
//     "gamehub/gamehub-3.jpg",
//     "gamehub/gamehub-4.jpg",
//     "gamehub/gamehub-5.jpg",
//     "gamehub/gamehub-6.jpg",
//     "gamehub/gamehub-7.jpg",
//     "gamehub/gamehub-8.jpg",
//     "gamehub/gamehub-9.jpg",
//     "gamehub/gamehub-10.jpg",
//   ],
//   [
//     "csm/cms-1.jpg",
//     "csm/cms-2.jpg",
//     "csm/cms-3.jpg",
//     "csm/cms-4.jpg",
//     "csm/cms-5.jpg",
//     "csm/cms-6.jpg",
//     "csm/cms-7.jpg",
//     "csm/cms-8.jpg",
//     "csm/cms-9.jpg",
//   ],
//   [
//     "chefs-table/ct-1.jpg",
//     "chefs-table/ct-2.jpg",
//     "chefs-table/ct-3.jpg",
//     "chefs-table/ct-4.jpg",
//     "chefs-table/ct-5.jpg",
//     "chefs-table/ct-6.jpg",
//     "chefs-table/ct-7.jpg",
//     "chefs-table/ct-8.jpg",
//     "chefs-table/ct-9.jpg",
//     "chefs-table/ct-10.jpg",
//   ],
// ];
// function loadCurrentImage(container) {
//   console.log("imageUrls: ", imageUrls);
//   const projectClass = container.parentNode.parentNode.parentNode.classList.item(1);
//   console.log("projectClass: ", projectClass);
//   const position = parseInt(container.dataset.position);
//   console.log("position: ", position);
//   const imagePath = "images/" + "csm/cms-1.jpg";
//   // const imagePath = "images/" + imageUrls[projectClass][position];
//   console.log("imagePath: ", imagePath);
//   container.style.backgroundImage = `url(${imagePath})`;
// }

// function handleArrowClick(event) {
//   const arrow = event.target;
//   const carouselContainer = arrow.closest(".carousel-item").querySelector(".carousel-images");
//   const currentPosition = parseInt(carouselContainer.dataset.position);
//   const projectClass = carouselContainer.parentNode.parentNode.parentNode.classList.item(1);
//   const maxPosition = imageUrls[projectClass].length - 1;

//   let newPosition;

//   if (arrow.classList.contains("left-arrow")) {
//     newPosition = (currentPosition - 1 + imageUrls[projectClass].length) % imageUrls[projectClass].length;
//   } else if (arrow.classList.contains("right-arrow")) {
//     newPosition = (currentPosition + 1) % imageUrls[projectClass].length;
//   }

//   carouselContainer.dataset.position = newPosition;
//   loadCurrentImage(carouselContainer);
// }

// carouselContainers.forEach((container) => {
//   container.dataset.position = 0;
//   loadCurrentImage(container);
// });

// const leftArrows = document.querySelectorAll(".left-arrow");
// const rightArrows = document.querySelectorAll(".right-arrow");

// leftArrows.forEach((arrow) => {
//   arrow.addEventListener("click", handleArrowClick);
// });

// rightArrows.forEach((arrow) => {
//   arrow.addEventListener("click", handleArrowClick);
// });




const carouselContainers = document.querySelectorAll(".carousel-images");

const imageUrls = {
  flex-column: [
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
  ],
  project2: [
    "csm/cms-1.jpg",
    "csm/cms-2.jpg",
    "csm/cms-3.jpg",
    "csm/cms-4.jpg",
    "csm/cms-5.jpg",
    "csm/cms-6.jpg",
    "csm/cms-7.jpg",
    "csm/cms-8.jpg",
    "csm/cms-9.jpg",
  ],
  project3: [
    "chefs-table/ct-1.jpg",
    "chefs-table/ct-2.jpg",
    "chefs-table/ct-3.jpg",
    "chefs-table/ct-4.jpg",
    "chefs-table/ct-5.jpg",
    "chefs-table/ct-6.jpg",
    "chefs-table/ct-7.jpg",
    "chefs-table/ct-8.jpg",
  ],
};
console.log("imageUrls is: ", imageUrls);

function loadCurrentImage(projectClass, position) {
  const imagePath = "images/" + imageUrls[projectClass][position];
  carouselContainers.forEach((container) => {
    if (container.classList.contains(projectClass)) {
      container.style.backgroundImage = `url(${imagePath})`;
    }
  });
}

function handleArrowClick(event) {
  const arrow = event.target;
  const carouselContainer = arrow.closest(".project-container").querySelector(".carousel-images");
  const projectClass = carouselContainer.parentNode.classList[1];

  let currentPosition = parseInt(carouselContainer.dataset.position);
  if (arrow.classList.contains("left-arrow")) {
    currentPosition--;
    if (currentPosition < 0) {
      currentPosition = imageUrls[projectClass].length - 1;
    }
  } else if (arrow.classList.contains("right-arrow")) {
    currentPosition++;
    if (currentPosition >= imageUrls[projectClass].length) {
      currentPosition = 0;
    }
  }

  carouselContainer.dataset.position = currentPosition;
  loadCurrentImage(projectClass, currentPosition);
}

leftArrow.addEventListener("click", handleArrowClick);
rightArrow.addEventListener("click", handleArrowClick);

// Initial load of the images
carouselContainers.forEach((container) => {
  const projectClass = container.parentNode.classList[1];
  container.dataset.position = 0; // Set the initial position to 0
  loadCurrentImage(projectClass, 0);
});
