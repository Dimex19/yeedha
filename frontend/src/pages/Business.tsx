// import React from 'react'
import Download from "../components/business/DownloadYeedha"
import DriveWithYeedha from "../components/business/DriveWithYeedha"
import Faq from "../components/business/Faq"
import Hero from "../components/business/Hero"
import HowYeedhaWorks from "../components/business/HowYeedhaWorks"
import YeedhaAdvantage from "../components/business/YeedhaAdvantage"
import StartAndNewsletter from "../components/home/StartAndNewsletter"
import Layout from "../components/Layout"

const Driver = () => {
  return (
    <>
        <Layout>
            <Hero/>
            <DriveWithYeedha/>
            <HowYeedhaWorks/>
            <YeedhaAdvantage/>
            <Faq/>
            <Download/>
            <StartAndNewsletter/>
        </Layout>
    </>
  )
}

export default Driver