// Fetch the README.md file
fetch("README.md")
  .then((response) => response.text())
  .then((markdown) => {
    // Create a new Showdown converter
    const converter = new showdown.Converter();

    // Convert the markdown to HTML
    const html = converter.makeHtml(markdown);

    // Display the HTML in the container element
    const readmeContainer = document.getElementById("readme-container");
    readmeContainer.innerHTML = html;
  });
