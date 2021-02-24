import React from "react"
// named export Helmet from the package
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  // dynamically display site title
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // using Helmet to display dynamic page title
  return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
}

export default Head
