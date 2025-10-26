// import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/autoServices/Hero'
import HowItWorks from '../components/autoServices/HowItWorks'
import HealthCoverage from '../components/autoServices/HealthCoverage'
// import StartAndNewsletter from '../components/home/StartAndNewsletter'
import FindMechanic from '../components/autoServices/FindMechanic'

const HealthInsurance = () => {
  return (
    <div>
        <Layout>
            <Hero/>
            <HowItWorks/>
            <HealthCoverage/>
            <FindMechanic/>
            {/* <StartAndNewsletter/> */}
        </Layout>
    </div>
  )
}

export default HealthInsurance