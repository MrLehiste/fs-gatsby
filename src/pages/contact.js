import React from "react"
import Layout from "../components/layout"
import wechat from "../images/wechat.jpg"
import fujiwe from "../images/wechat-fuji.jpg"
import whatsapp from "../images/whatsapp.jpg"
import fujiwhat from "../images/whatsapp-fuji.jpg"

export default function Contact() {
  return (
    <Layout tab="Contact">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img className="h-24 mb-2" src={wechat} alt="Wechat" />
          <img className="h-96" src={fujiwe} alt="Fuji Wechat" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mt-2 mb-6">我們可以發送免費教培訓片到那個電郵地址
我會有一個免費培訓課程發送給你</h1>
          <p>
            <a href="mailto:info@fujisuzuki.com">✉️ fuji@fujisuzuki.com</a>
          </p>
          <img className="h-24 mt-4 mb-2" src={whatsapp} alt="Whatsapp" />
          <img className="h-96" src={fujiwhat} alt="Fuji Whatsapp" />
        </div>
      </div>

    </Layout>
  )
}