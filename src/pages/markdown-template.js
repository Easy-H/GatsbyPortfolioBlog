// markdown-template.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Markdown = ({data}) => (
  <Layout>
    <h1>{data.frontmatter.title}</h1>
    <h2>{data.frontmatter.date}</h2>
    <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
  </Layout>
)

export const Head =()=> <Seo title="markdown" />
export default Markdown

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        path
        title
      }
    }
  }
`