const projectContainer = document.getElementById("project-container");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

// Function to update the project content
function updateProjectContent(projectId) {
  // Clear the current content of the project container
  projectContainer.innerHTML = "";

  // Add the new project content based on the project ID
  switch (projectId) {
    case "project2":
      projectContainer.innerHTML = "<!-- Project 2 content here -->";
      break;
    case "project3":
      projectContainer.innerHTML = "<!-- Project 3 content here -->";
      break;
    default:
      break;
  }
}

// Event listeners for the back and next buttons
backButton.addEventListener("click", () => {
  // Get the current project ID from the project container
  const currentProjectId = projectContainer.getAttribute("id");

  // Update the project content based on the previous project ID
  switch (currentProjectId) {
    case "project2":
      updateProjectContent("project1");
      break;
    case "project3":
      updateProjectContent("project2");
      break;
    default:
      break;
  }
});

nextButton.addEventListener("click", () => {
  // Get the current project ID from the project container
  const currentProjectId = projectContainer.getAttribute("id");

  // Update the project content based on the next project ID
  switch (currentProjectId) {
    case "project1":
      updateProjectContent("project2");
      break;
    case "project2":
      updateProjectContent("project3");
      break;
    default:
      break;
  }
});
