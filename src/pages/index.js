import React from "react"
import Layout from "../components/layout"
import ReactPlayer from 'react-player/file'
import FaCheck from '../components/fa-check'
import ButtonGreen from '../components/buttongreen'
import Post from "../components/post"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import team8 from "../images/team8.jpg"

export default function Home({ data }) {
  return (
    <Layout tab="Team">
      <div className="">
        <div className="md:w-1/2">
          <ReactPlayer playing width="100%" height="100%" className=""
            controls={true} //{['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="https://s3.amazonaws.com/media.fujisuzuki.com/funnel/page1.jpg"
            url={[
              {src: 'https://s3.amazonaws.com/media.fujisuzuki.com/funnel/page1.mp4', type: 'video/mp4'},
              {src: 'https://s3.amazonaws.com/media.fujisuzuki.com/funnel/page1.webm', type: 'video/webm'}
            ]}
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold text-gray-700 mt-2 mb-6">你想成為行業的頂峰嗎？</h1>
          <ul className="list-none leading-8">
            <li><FaCheck /> 如何實踐三年財富自由永久退休計劃</li>
            <li><FaCheck /> 我們會提供培訓免費課程給你</li>
            <li><FaCheck /> 你想擁有一個有共同目標的團隊和你一起攜手佔領市場， 用最短的時間達到行業的頂峰</li>
            <li><FaCheck /> 跟隨Fuji Suzuki都是我的Mentor,她的提點給我一個肯定， 啟發到我成為一個成功的企業家...你準備好了嗎？</li>
          </ul>
          




          <ButtonGreen />
        </div>
        <div className="col-span-2 md:px-10 mt-6">
          <p className="mb-4 font-bold">2021 年「企業戰略策劃」
今年，確保你生意不跌反升，突破樽頸位，甚至超越以往嘅業績...！</p>
          <p className="mb-4">免費出席我的長達 1小時網上機密招商培訓，來到取得整個「GROWTH 企業戰略策劃」嘅所有工具、策略、技巧... 然後直接用喺你嘅生意上面（就好似 Copy and Paste 咁），令 2021 年成為你生意突破嘅轉捩點！當中會有</p>
          <p className="mb-4">過往已經有超過 數名會員，利用「GROWTH 企業戰略策劃」，獲得非常卓越嘅業績：</p>
          <p className="mb-4">不過... 你都可以做得到！因為...</p>
          <p className="font-bold">「GROWTH 企業戰略策劃」就好似你嘅軍師，令你更清楚目前嘅形勢，協助你制定合適嘅戰略，例如：</p>
          <p className="mb-4">
<br />   喺巖峻嘅經濟環境，如何令生意不但冇下跌，仲可以持續咁增長？
<br />   精準搵出你現時嘅營商模式有咩地方需要立即修補及改善...同埋如何改善？
<br />   有咩商業活動你唔應該做？有咩係應該做？你可以預見嘅效果係點？
<br />   如何無需增加開支，無需冒險嘅情況下，都可以令你得到兩倍、三倍、甚至四倍嘅盈利？
<br />   還有更多...！</p>
          <p className="mb-4">我喺過去幾年，發展網絡生意嘅時候，要撞嘅板，我都撞過晒。</p>
          <p className="mb-4">買錯軟件又試過... 收費系統失靈又試過... 結論係...</p>
          <p className="mb-4">嘥錢！嘥時間！</p>
          <p className="mb-4">完全幫唔到我提升生意業績！</p>
          <p className="mb-4">原因係... 教嗰個都唔係嗰個界別成功嘅人！</p>
          <p className="mb-4">（即係... 我想打 NBA，但係無搵 Michael Jordan 拜師學藝，反而搵咗個體育老師教我... ）</p>
          <p className="mb-4">其實所有最高級別嘅學員都係同你一樣，唔想浪費青春行冤枉路。</p>
          <p className="mb-4">我唔知道你 2021 有冇咩計劃...</p>
          <p className="mb-4">不過如果你唔想「見步行步」、抱住「摸住石頭過河」嘅話...</p>
          <p className="mb-4">我建議你輕輕鬆鬆坐低，畀我同我團隊直接支援你，點樣一步一步同你計劃 2022 年嘅生意路線：</p>
          <img className="" src={team8} alt="Team 8" />
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
                <ReactPlayer width="100%" height="100%" className="md:h-1/2"
                  controls={true} //{['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                  poster={node.frontmatter.poster}
                  url={[
                    {src: node.frontmatter.mp4, type: 'video/mp4'},
                    {src: node.frontmatter.webm, type: 'video/webm'}
                  ]}
                />
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
            mp4
            webm
            poster
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