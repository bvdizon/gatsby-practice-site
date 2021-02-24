import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <main className={layoutStyles.container}>
      <section>
        <Nav />
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Layout
