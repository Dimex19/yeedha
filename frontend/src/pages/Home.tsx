// import React from 'react'
import DoMore from '../components/home/DoMore'
import Hero from '../components/home/Hero'
import RideAndEarn from '../components/home/RideAndEarn'
import Extras from '../components/home/Extras'
import StartAndNewsletter from '../components/home/StartAndNewsletter'
import Download from '../components/home/Download'
import About from '../components/home/About'
import Layout from '../components/Layout';


const Home = () => {
  return (
    <>
        <Layout>
            <Hero/>
            <DoMore/>
            <About/>
            <RideAndEarn/>
            <Extras/>
            <Download/>
            <StartAndNewsletter/>
        </Layout>

    </>
  )
}

export default Home