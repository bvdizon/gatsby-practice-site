import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "./nav.module.scss"

const getData = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const Nav = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(getData)

  return (
    <>
      <header>
        <h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            {title}
          </Link>
        </h1>
        <p>{description}</p>
        <nav className={styled.mainNav}>
          <ul>
            <li>
              <Link to="/about/">About Us</Link>
            </li>
            <li>
              <Link to="/blogs/">Our Blogs</Link>
            </li>
            <li>
              <Link to="/products/">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  )
}

export default Nav
