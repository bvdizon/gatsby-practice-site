import React from "react"
import Layout from "../components/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
      bodyRichText {
        raw
      }
    }
  }
`

const Blog = ({ data }) => {
  // destructured props
  const {
    title,
    publishedDate,
    bodyRichText: { raw },
  } = data.contentfulBlogPost

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(JSON.parse(raw))}
    </Layout>
  )
}

export default Blog
