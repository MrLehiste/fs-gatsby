import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import ButtonGreen from '../components/buttongreen'

export default function BlogPost({ data }) {
  const node = data.markdownRemark
  
  return (
    <Layout tab="Team">
      <Post image={node.frontmatter.image} title={node.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </Post>
      <ButtonGreen />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`