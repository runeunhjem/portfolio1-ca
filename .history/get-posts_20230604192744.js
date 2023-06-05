let postsPerPage = 50;
const apiUrl = `https://wordpress.runeunhjem.no/wp-json/wp/v2/posts?per_page=${postsPerPage}&_embed=1`;
let posts = [];

async function getPosts() {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    for (let i = 0; i < 50; i++) {
      const item = result[i];
      if (!item) {
        continue;
      }
      const categories = item._embedded["wp:term"][0].map((category) => category.name);
      const tags = item._embedded["wp:term"][1]
        .filter((tag) => tag.name !== "ep1" && tag.name !== "food")
        .map((tag) => tag.name);

      const post = {
        postId: item.id,
        title: item.title.rendered.replace(/&amp;/g, "&"),
        shortDescription: item.content.rendered
          .match(/<p>(.*?)<\/p>/)[1]
          .trim()
          .replace(/&amp;/g, "&"),
        tags: tags,
        date: new Date(item.modified),
        categories: categories,
        image: item.content.rendered.match(/src="([^"]*)"/)[1],
        instructions: item.content.rendered
          .match(/<p>Instructions:([\s\S]*?)(?:<\/ul>|<\/ol>|<\/ol><\/p>|<\/ol><br \/>)/)[1]
          .replace(/<\/?[uo]l>|<\/?li>|<\/?p>/g, "")
          .trim(),
        recipe: item.content.rendered
          .match(/Ingredients:([\s\S]*?)<ol>/)[1]
          .replace(/<\/?[^>]+(>|$)/g, "")
          .replace(/Instructions:([\s\S]*)/, "")
          .trim(),
      };
      posts.push(post);
    }
  } catch (error) {
    console.log(error);
  }
}

export { getPosts, posts };
