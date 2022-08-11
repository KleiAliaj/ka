import React from "react";
import Cosmic from "cosmicjs";

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG;
const READ_KEY = process.env.COSMIC_READ_KEY;

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
        <loc>https://tyfiero.com</loc>
        <priority>1.00</priority>
</url>

<url>
    <loc>https://tyfiero.com/about</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://tyfiero.com/code</loc>
    <priority>0.90</priority>
</url>
<url>
    <loc>https://tyfiero.com/code/art</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://tyfiero.com/ai</loc>
    <priority>0.80</priority>
</url>
<url>
    <loc>https://tyfiero.com/ai/Oliver</loc>
    <priority>0.80</priority>
</url>

<url>
    <loc>https://tyfiero.com/music</loc>
    <priority>0.80</priority>
</url>

<url>
    <loc>https://tyfiero.com/photos</loc>
    <priority>0.80</priority>
</url>


<url>
    <loc>https://tyfiero.com/devlab</loc>
    <priority>0.00</priority>
</url>


<url>
    <loc>https://tyfiero.com/links</loc>
    <priority>0.80</priority>
</url>

<url>
    <loc>https://tyfiero.com/blog</loc>
    <priority>0.90</priority>
</url>


${posts
  .map(({ id }) => {
    return `
            <url>
            <loc>${`https://tyfiero.com/blog/posts/${id}`}</loc>
            <priority>0.90</priority>
            </url>
            `;
  })
  .join("")}
          
          <url>
              <loc>https://tyfiero.com/contact</loc>
              <priority>0.50</priority>
          </url>

          <url>
          <loc>https://tyfiero.com/500</loc>
          <priority>0.00</priority>
          </url>
          
          <url>
          <loc>https://tyfiero.com/sitemap.xml</loc>
          </url>
          </urlset>
          `;
class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const getAllPosts = async () => {
      const params = {
        type: "posts",
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
