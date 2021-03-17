import React from "react"
import Layout from "../components/layout"
import wechat from "../images/wechat.jpg"
import fujiwe from "../images/wechat-fuji.jpg"
import whatsapp from "../images/whatsapp.jpg"
import fujiwhat from "../images/whatsapp-fuji.jpg"
import ContactList from "../components/contact-form"

export default function Contact() {
  return (
    <Layout tab="Contact">
      <ContactList />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center">
          <img className="h-96" src={fujiwe} alt="Fuji Wechat" />
        </div>
        <div className="md:col-span-1 flex flex-wrap justify-center">
          <img className="h-96" src={fujiwhat} alt="Fuji Whatsapp" />
        </div>
      </div>

    </Layout>
  )
}