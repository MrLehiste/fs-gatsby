import React from "react"
import Layout from "../components/layout"
import fujiwe from "../images/fuji-nye.jpg"

export default function Contact() {
  return (
    <Layout tab="Exclusive Course">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img className="h-96" src={fujiwe} alt="Fuji Pic" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mt-2 mb-6">Comin soon...</h1>
          <p>
            <a href="mailto:info@fujisuzuki.com">✉️ fuji@fujisuzuki.com</a>
          </p>
        </div>
      </div>

    </Layout>
  )
}