document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector("#back-button");
  const nextButton = document.querySelector("#next-button");
  const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));

  let currentIndex = 0;

  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateCounter(index);
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }

  function updateCounter(index) {
    const counter = document.querySelector(".count");
    counter.textContent = `${index + 1}/${carouselItems.length}`;
  }

  prevButton.addEventListener("click", goToPrevSlide);
  nextButton.addEventListener("click", goToNextSlide);
});
