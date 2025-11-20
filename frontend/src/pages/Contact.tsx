import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Hero from '../components/contact/Hero'
import Form from '../components/contact/Form'
// import StartAndNewsletter from '../components/home/StartAndNewsletter'
import TalkToUs from '../components/contact/TalkToUs'
import { getContactPageSettings } from "../utils/loaders";
import Loader from "../components/Loader";

const Contact = () => {
  const [contactPageData, setContactPageData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
       
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await getContactPageSettings();
        if (data) {
          setContactPageData(data);
          console.log("Contact Page Data:", data);
        }
      } catch (error) {
        console.error("Failed to fetch Contact page settings:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchSettings();
  }, []);

  const blocks = contactPageData?.blocks || [];

  // const heroBlock = blocks.find((b: any) => b.__component === "health-insurance.hero");
  const talkToUsBlock = blocks.find((b: any) => b.__component === "contact.talk-to-us");
  // const howItWorksBlock = blocks.find((b: any) => b.__component === "health-insurance.how-it-works");

  return (
    <div>
        <Layout>
          {loading && <Loader />}

          {!loading && (
            <>
            {contactPageData && <Hero {...contactPageData}/>}
            <Form/>
            {talkToUsBlock && <TalkToUs {...talkToUsBlock}/>}
            {/* <StartAndNewsletter/> */}
            </>
          )}
        </Layout>
    </div>
  )
}

export default Contact