// import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/healthInsurance/Hero'
import HowItWorks from '../components/healthInsurance/HowItWorks'
import HealthCoverage from '../components/healthInsurance/HealthCoverage'
import Eligibility from '../components/healthInsurance/Eligibility'
import Faq from '../components/healthInsurance/Faq'
import StartAndNewsletter from '../components/home/StartAndNewsletter'

const HealthInsurance = () => {
  return (
    <div>
        <Layout>
            <Hero/>
            <HowItWorks/>
            <HealthCoverage/>
            <Eligibility/>
            <Faq/>
            <StartAndNewsletter/>
        </Layout>
    </div>
  )
}

export default HealthInsurance