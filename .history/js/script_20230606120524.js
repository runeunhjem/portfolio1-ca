<script>
  // Get the buttons
  const buttons = document.querySelectorAll('.nav-button');

  // Add event listeners to the buttons
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Determine the target page based on the button index
      let targetPage;
      if (index === 0) {
        targetPage = 'index.html';
      } else if (index === 1) {
        targetPage = 'about.html';
      } else if (index === 2) {
        targetPage = 'contact.html';
      }

      // Navigate to the target page
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });
