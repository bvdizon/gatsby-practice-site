import { Link } from "gatsby"
import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"

export default function blogs({ data }) {
  console.log(data.allContentfulBlogPost)
  return (
    <Layout>
      <Head title="Blogs" />
      <h1>Blog Posts</h1>
      {data.allContentfulBlogPost.edges.map(item => {
        return (
          <article key={item.node.id}>
            <h3>
              <Link to={`/blog/${item.node.slug}`}>{item.node.title}</Link>
            </h3>
            <p>{item.node.publishedDate}</p>
          </article>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishedDate(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
