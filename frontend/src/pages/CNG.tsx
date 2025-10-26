// import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/cng/Hero'
import HowItWorks from '../components/cng/HowItWorks'
import CarReady from '../components/cng/CarReady'
import WhyThisMatter from '../components/cng/WhyThisMatter'
import Faq from '../components/cng/Faq'
import ApplyForConversion from '../components/cng/ApplyForConversion'
// import StartAndNewsletter from '../components/home/StartAndNewsletter'

const HealthInsurance = () => {
  return (
    <div>
        <Layout>
            <Hero/>
            <WhyThisMatter/>
            <CarReady/>
            <HowItWorks/>
            <Faq/>
            <ApplyForConversion/>
            {/* <StartAndNewsletter/> */}
        </Layout>
    </div>
  )
}

export default HealthInsurance