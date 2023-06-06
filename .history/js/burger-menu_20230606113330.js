const hamburger = document.querySelector(".hamburger");
const menu = document.createElement("div");
menu.classList.add("menu");
document.body.appendChild(menu);

const menuItems = [
  { text: "Home", link: "#" },
  { text: "About", link: "#" },
  { text: "Contact", link: "#" },
];

const menuList = document.createElement("ul");
menu.appendChild(menuList);

menuItems.forEach((item) => {
  const menuItem = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.href = item.link;
  menuLink.textContent = item.text;
  menuItem.appendChild(menuLink);
  menuList.appendChild(menuItem);
});

let menuOpen = false;

hamburger.addEventListener("click", function () {
  if (menuOpen) {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  menuOpen = !menuOpen;
});
