const imageUrls = {
  project1: [
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

  function loadCurrentImage(container) {
    const projectContainer = container.closest(".carousel-item").querySelector(".project-container");
    const projectClass = projectContainer.classList.item(2);
    const position = parseInt(container.dataset.position);
    const imagePath = "images/" + imageUrls[projectClass][position];
    container.style.backgroundImage = `url(${imagePath})`;
  }

  function showSlide(index) {
    const carouselContainer = document.querySelector(".carousel");
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    updateCounter(index);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const carouselContainers = document.querySelectorAll(".carousel-images");
    carouselContainers.forEach((container) => {
      container.dataset.position = 0;
      loadCurrentImage(container);
    });

    const prevButton = document.querySelector("#back-button");
    const nextButton = document.querySelector("#next-button");
    const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));

    let currentIndex = 0;

    function goToPrevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }

    function goToNextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }

    prevButton.addEventListener("click", goToPrevSlide);
    nextButton.addEventListener("click", goToNextSlide);

    function handleArrowClick(event) {
      const arrow = event.target;
      const carouselContainer = arrow.closest(".carousel-item").querySelector(".carousel-images");
      const currentPosition = parseInt(carouselContainer.dataset.position);
      const maxPosition = imageUrls[carouselContainer.classList.item(2)].length - 1;

      let newPosition;

      if (arrow.classList.contains("left-arrow")) {
        newPosition = (currentPosition - 1 + maxPosition + 1) % (maxPosition + 1);
      } else if (arrow.classList.contains("right-arrow")) {
        newPosition = (currentPosition + 1) % (maxPosition + 1);
      }

      carouselContainer.dataset.position = newPosition;
      loadCurrentImage(carouselContainer);
      showSlide(currentIndex); // Call showSlide to update the slide position
    }

    const leftArrows = document.querySelectorAll(".left-arrow");
    const rightArrows = document.querySelectorAll(".right-arrow");

    leftArrows.forEach((arrow) => {
      arrow.addEventListener("click", handleArrowClick);
    });

    rightArrows.forEach((arrow) => {
      arrow.addEventListener("click", handleArrowClick);
    });


    function updateCounter(index) {
      const countElement = document.querySelector(".count");
      countElement.textContent = `${index + 1}/${carouselItems.length}`;
    }

    showSlide(currentIndex);
});
