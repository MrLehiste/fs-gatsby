import React from "react"
import Layout from "../components/layout"
import promoImg from "../images/harvest-promo-2021.png"
import enjoyImg from "../images/enjoy-life.png"
import profImg from "../images/david-sinclair.jpeg"
import mechImg from "../images/mechanism-nmn.png"
import resImg from "../images/results-nmn.jpeg"

export default function Nmn() {
  return (
    <Layout tab="NMN iHealth">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <strong className="text-xl">GREAT AUTUMN HARVEST PROMOTION 2021</strong>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <h3 className="text-lg">Excellent Cash Rebate with Twice the Bonus and Twice the Purchase Price!<br/>Start the Global Chain Business Simultaneously!</h3>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={promoImg} alt="GREAT AUTUMN HARVEST PROMOTION 2021" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-1 flex flex-wrap justify-center items-center mt-4">
          <img className="" src={enjoyImg} alt="Everyone should enjoy a healthy life!" />
        </div>
      </div>
      <div className="w-auto md:w-5/6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <h4 className="text-base"><span className="text-purple-800">iHealth Innovative Tech Corp (IITC) </span>is a leading next-generation American-based enterprise specializing in nutritional health and wellness. With a strong dedicated scientific and development team, iHealth is at the industry forefront with its innovative product lines that promote personal wellness and beauty. The company has rapidly expanded around the world with a very large international customer base.<br/>
        The goal of establishing IITC is to use the latest and most advanced scientific research results, formulas, and production technologies in the world today to develop the iHealth product series. Thus, entering the <span className="text-purple-600">“longevity industry”</span><br/>
        <span className="text-purple-800">“age-reversal industry”</span><br/>
        <span className="text-purple-800">“wellness industry”</span><br/>
        We strive to be innovative and be the leader in setting the market trends of Longevity,<br/>
        Wellness, and Age-defying industries!<br/>
        Breakaway from the past and embrace the future!<br/>
        <span className="text-purple-800">iHealth Innovative Tech Corp (IITC) </span><br/>
        has now expanded to 50 countries,<br/>
        and the NMN produced is the only <span className="text-red-800">NMN</span> in the world that has obtained<br/>
        Nine Major Certifications<br/>Unparalleled in the world<br/>
        Embrace the future!</h4>
        <strong className="hidden">www.ihlglobal.com</strong>
      </div>
      <div className="w-auto md:w-5/6 mt-6 grid grid-cols-1 md:grid-cols-1 gap-8">
        <h4 className="text-lg text-purple-800"><strong>What is NMN?</strong><br/>NMN is the world's first scientific research result that has been rigorously scientifically proven to significantly reverse aging and prolong life. It was developed by Prof. David Sinclair of Harvard University in 2013. Professor Sinclair's laboratory has initially discovered results in the field of anti-aging.</h4>
      </div>
      <div className="w-auto md:w-5/6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-wrap justify-center items-center mt-4">
          <img className="" src={profImg} alt="Prof. David Sinclair" />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <h3 className="text-lg"><strong>Prof. David Sinclair</strong> is a lifelong professor of genetics at Harvard Medical School. 
          He is the discoverer of resveratrol. In recent years, he was selected as the top 100 most influential in Time Magazine for his discoveries and breakthroughs in NMN and NAD+.&nbsp;
          <br/>Professor David Sinclair was awarded the NASA iTech Award in 2016 and 2018 for NMN's ability to resist radiation and increase skeletal muscle.</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <h3 className="text-lg">
            <strong>The mechanism of NMN</strong><br/>
            <strong>NMN stands for Nicotinamide mononucleotide, </strong><br/>
            with a molecular weight of 334.2192. <br/>
            It is an inherent substance in the human body, safe and without side effects. <br/>
            It is also rich in some fruits and vegetables, <br/>
            and it is natural and harmless. In the human body, <br/>
            <strong>NMN is the precursor of NAD+,</strong> and its functions are all manifested through NAD+. <br/>
            The powerful effect of NMN comes from the three core mechanisms of its transformation into NAD+: <br/>
            activation of longevity protein <strong>Sirtuins1~7,</strong> activation of <strong>DNA repair enzyme PARP,</strong> and activation of immune <strong>regulation loop ADP ribose synthase.</strong>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <img className="" src={mechImg} alt="The mechanism of NMN" />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4">
        <img className="" src={resImg} alt="Research results of NMN" />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <h3 className="text-xl">
            <strong>Research results of NMN</strong><br/><br/>
            NMN is the only empirical research conducted by dozens of academic papers published in the three top international academic journals "Science", "Nature" and "Cell". <br/>
            It has a cytokine factor that can significantly reverse aging and can activate <strong>Sitruins and DNA repair enzymes (PARP)</strong>, which achieve a comprehensive anti-aging mechanism, <br/>
            are the most comprehensive, <br/>
            <strong>most powerful and free of side-effect !</strong><br/>
            Cellular anti-aging factors known in science, and are considered to be the most effective at this stage. <br/>
            Substances that may control human aging.
          </h3>
        </div>
      </div>
    </Layout>
  )
}