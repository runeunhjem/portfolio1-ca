const menuItems = document.querySelectorAll(".fancy-menu li");

menuItems.forEach((item, index) => {
  item.style.setProperty("--index", index);
});
const hamburger = document.querySelector(".hamburger");
const fancyMenu = document.querySelector(".fancy-menu");

hamburger.addEventListener("click", function () {
  fancyMenu.classList.toggle("open");
});
