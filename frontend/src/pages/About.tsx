// import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/about/Hero'
import Empower from '../components/about/Empower'
import Discover from '../components/about/Discover'

const About = () => {
  return (
    <div>
        <Layout>
            <Hero/>
            <Empower/>
            <Discover/>
        </Layout>
    </div>
  )
}

export default About