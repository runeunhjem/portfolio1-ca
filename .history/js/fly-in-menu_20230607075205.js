

// const menuItems = [
//   { name: "Home", isActive: true },
//   { name: "About", isActive: false },
//   { name: "Contact", isActive: false },
//   {
//     name: "School projects",
//     isActive: false,
//     projects: [{ name: "Visit Game Hub" }, { name: "Visit CMS" }, { name: "Visit Chef's Table" }],
//   },
//   { name: "My projects", isActive: false },
//   { name: "Portfolio README", isActive: false },
// ];

// // Get the menu list element
// const menuList = document.querySelector(".menu-list");

// // Function to create a menu item
// function createMenuItem(item) {
//   const menuItem = document.createElement("li");
//   menuItem.classList.add("fly-in-item", "flex");
//   if (item.isActive) {
//     menuItem.classList.add("active");
//   }
//   menuItem.textContent = item.name;
//   return menuItem;
// }

// // Function to create a project list
// function createProjectList(projects) {
//   const projectList = document.createElement("ol");
//   projectList.classList.add("project-toggle", "flex");
//   projectList.style.display = "none";

//   projects.forEach((project) => {
//     const projectItem = document.createElement("li");
//     projectItem.classList.add("fly-in-item", "flex");
//     projectItem.textContent = project.name;
//     projectList.appendChild(projectItem);
//   });

//   return projectList;
// }

// // Function to toggle project list visibility
// function toggleProjectList(event) {
//   const projectList = event.target.nextElementSibling;
//   projectList.style.display = projectList.style.display === "none" ? "block" : "none";
// }

// // Build the menu
// menuItems.forEach((item) => {
//   const menuItem = createMenuItem(item);
//   menuList.appendChild(menuItem);

//   if (item.projects) {
//     const projectList = createProjectList(item.projects);
//     menuItem.insertBefore(projectList, menuItem.lastChild);
//     menuItem.addEventListener("click", toggleProjectList);
//   }
// });
