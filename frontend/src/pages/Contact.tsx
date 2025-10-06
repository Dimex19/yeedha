// import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/contact/Hero'
import Form from '../components/contact/Form'
import StartAndNewsletter from '../components/home/StartAndNewsletter'
import TalkToUs from '../components/contact/TalkToUs'

const Contact = () => {
  return (
    <div>
        <Layout>
            <Hero/>
            <Form/>
            <TalkToUs/>
            <StartAndNewsletter/>
        </Layout>
    </div>
  )
}

export default Contact