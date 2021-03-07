import React from "react"
import Layout from "../components/layout"
import ReactPlayer from 'react-player/file'
import FaCheck from '../components/fa-check'
import ButtonGreen from '../components/buttongreen'
import Post from "../components/post"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"

export default function Home({ data }) {
  return (
    <Layout tab="Team">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ReactPlayer playing width="100%" height="100%" className="my-auto"
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="https://video.fujisuzuki.com/funnel/new1/0711-1.jpg"
            url={[
              {src: 'https://video.fujisuzuki.com/funnel/new1/0711-1.mp4', type: 'video/mp4'},
              {src: 'https://video.fujisuzuki.com/funnel/new1/0711-1.webm', type: 'video/webm'}
            ]}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mt-2 mb-6">你想成為行業的頂峰嗎？</h1>
          <ul className="list-none leading-8">
            <li><FaCheck /> 如何實踐三年財富自由永久退休計劃</li>
            <li><FaCheck /> 我們會提供培訓免費課程給你</li>
            <li><FaCheck /> 你想擁有一個有共同目標的團隊和你一起攜手佔領市場，
    用最短的時間達到行業的頂峰</li>
            <li><FaCheck /> <strong>跟隨Fuji Suzuki都是我的Mentor,</strong>她的提點給我一個肯定，
    啟發到我成為一個成功的企業家...你準備好了嗎？</li>
          </ul>
          <ButtonGreen />
        </div>
      </div>
      
      <div id="listTeamMembers">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <Post image={node.frontmatter.image} title={node.frontmatter.title}>
                <p>{node.excerpt}</p>
              </Post>
            </Link>
          </div>
        ))}

      </div>
      <ButtonGreen />
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`