import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import ButtonGreen from '../components/buttongreen'
import ReactPlayer from 'react-player/file'

export default function BlogPost({ data }) {
  const node = data.markdownRemark
  
  return (
    <Layout tab="Team">
      <Post image={node.frontmatter.image} title={node.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
        <ReactPlayer width="100%" height="100%" className="md:h-1/2"
          controls={true} //{['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster={node.frontmatter.poster}
          url={[
            {src: node.frontmatter.mp4, type: 'video/mp4'},
            {src: node.frontmatter.webm, type: 'video/webm'}
          ]}
        />
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
        mp4
        webm
        poster
      }
    }
  }
`