import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layout">
        <main>{children}</main>
        <footer className=" card-footer text-center text-white bg-dark">
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="https://www.gatsbyjs.org" className="text-white">Louie Fitzpatrick</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
