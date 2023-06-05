const homePageRecipes = "https://good-food-mood.marshwoolgar.no/wp-json/wp/v2/posts";
console.log(`homePageRecipes: ${homePageRecipes}`);
const fetchRecipes = async () => {
  await fetch(homePageRecipes)
    .then((response) => response.json())
    .then((data) => {
      const filterRecipes = data.map((recipe) => recipe.recipe);
      console.log(`filterRecipes: ${filterRecipes}`);
      const recipe = document.getElementById("blog-card");
      let perRecipe = "";
      for (let i = 4; i < filterRecipes.length; i++) {
        console.log(`response: ${response}`);
        perRecipe += `<div class="blog-card">
          <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
            <img src="images/Coconut chicken.jpg" width="300" height="360" loading="lazy" alt="The trick to getting more done is to have the freedom to roam around" class="img-cover">
          </figure>
          <div class="card-content">
            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
                <p class="content">${filterRecipes.title[i]}</p>
              </a>
            </h3>
          </div>
        </div>`;
      }

      recipe.innerHTML = perRecipe;
    });
};

fetchRecipes();
