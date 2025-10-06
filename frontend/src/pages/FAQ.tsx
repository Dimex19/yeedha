// import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/faq/Hero'
import Faq from '../components/faq/Faq'
import StartAndNewsletter from '../components/home/StartAndNewsletter'

const FAQ = () => {
  return (
    <div>
        <Layout>
            <Hero/>
            <Faq/>
            <StartAndNewsletter/>
        </Layout>
    </div>
  )
}

export default FAQ