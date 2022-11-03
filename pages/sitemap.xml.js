import React from "react";
import Cosmic from "cosmicjs";

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG;
const READ_KEY = process.env.COSMIC_READ_KEY;

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});
const createSitemap = (posts) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
        <loc>https://www.tyfiero.com</loc>
        <priority>1.00</priority>
</url>


<url>
    <loc>https://www.tyfiero.com/code</loc>
    <priority>0.90</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/consistensea</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/deliberate-design</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/drums</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/formulata</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/ideaisland</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/Oliver</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/pa-ada</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/pa-eth</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/pa-web</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/tyfiero</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/projects/brainstorm-buddy-project</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/ai</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/ai/Oliver</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/code/ai/brainstorm-buddy</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/art</loc>
    <priority>0.80</priority>
</url>

<url>
    <loc>https://www.tyfiero.com/art/ai-art</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/art/generative</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/art/photography</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/art/music</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/about</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/about/links</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/about/books</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/about/travel</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://www.tyfiero.com/blog</loc>
    <priority>0.90</priority>
</url>

${posts
  .map(({ id }) => {
    return `
            <url>
            <loc>${`https://www.tyfiero.com/blog/posts/${id}`}</loc>
            <priority>0.90</priority>
            </url>
            `;
  })
  .join("")}

          
          <url>
              <loc>https://www.tyfiero.com/contact</loc>
              <priority>0.50</priority>
          </url>

         
          
         
          </urlset>
          `;
};
class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const getAllPosts = async () => {
      const params = {
        type: "blogposts",
        props: "slug",
      };
      const data = await bucket.getObjects(params);
      return data.objects;
    };

    const allPosts = await getAllPosts()
      .then((posts) => {
        return posts.map((post) => {
          return {
            id: post.slug,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(allPosts));
    res.end();
  }
}

export default Sitemap;
