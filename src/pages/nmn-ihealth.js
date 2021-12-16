import React from "react"
import Layout from "../components/layout"
import t1 from "../images/nmn/t1.png"
import p1 from "../images/nmn/p1.jpg"
import t2 from "../images/nmn/t2.png"
import t3 from "../images/nmn/t3.png"
import t4 from "../images/nmn/t4.png"
import t5 from "../images/nmn/t5.png"
import frm from "../images/nmn/form.png"
import fb1 from "../images/nmn/fb1.png"
import fb from "../images/nmn/fb.png"
import { Link } from "gatsby"

export default function Nmn() {
  return (
    <Layout tab="NMN iHealth">
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={t1} alt="t1" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={p1} alt="p1" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={t2} alt="t2" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={t3} alt="t3" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={t4} alt="t4" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={t5} alt="t5" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <Link to={"https://fuji7878.ihlglobal.com"}>
            <img className="" src={frm} alt="frm" />
          </Link>
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={fb1} alt="fb1" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <Link to={"https://www.facebook.com/DreamBossQueen/"}>
            <img className="" src={fb} alt="fb" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}