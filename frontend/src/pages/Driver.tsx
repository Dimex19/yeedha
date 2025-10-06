// import React from 'react'
import DriveWithYeedha from "../components/driver/DriveWithYeedha"
import Faq from "../components/driver/Faq"
import Hero from "../components/driver/Hero"
import HowYeedhaWorks from "../components/driver/HowYeedhaWorks"
import YeedhaAdvantage from "../components/driver/YeedhaAdvantage"
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
        </Layout>
    </>
  )
}

export default Driver