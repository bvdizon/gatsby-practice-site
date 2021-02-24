const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogPost = path.resolve("./src/templates/blog-post.js")

  // 2. Get markdown data
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 3. Create new pages
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogPost,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
