const menuItems = document.querySelectorAll(".fancy-menu li");

menuItems.forEach((item, index) => {
  item.style.setProperty("--index", index);
});
