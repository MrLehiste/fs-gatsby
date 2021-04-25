import React from "react"
import Layout from "../components/layout"
import fujiwe from "../images/wechat-fuji.jpg"
import fujiwhat from "../images/whatsapp-fuji.jpg"
import teamcal from "../images/team-gold.jpg"
import ContactList from "../components/contact-form"

export default function Contact() {
  return (
    <Layout tab="Contact">
      <ContactList />
      <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center mt-4">
          <img className="h-4/5" src={teamcal} alt="Team Calerie" />
        </div>
      </div>
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