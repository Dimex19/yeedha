import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/faq/Hero'
import Faq from '../components/faq/Faq'
// import StartAndNewsletter from '../components/home/StartAndNewsletter'
import { getFaqPageSettings } from "../utils/loaders";

const FAQ = () => {
  const [faqPageData, setFaqPageData] = useState<any>(null);
  
    useEffect(() => {
      const fetchSettings = async () => {
        try {
          const { data } = await getFaqPageSettings();
          if (data) {
            setFaqPageData(data);
            console.log("FAQ Page Data:", data);
          }
        } catch (error) {
          console.error("Failed to fetch FAQ page settings:", error);
        }
      };
  
      fetchSettings();
    }, []);
  
    const blocks = faqPageData?.blocks || [];
  
    // const heroBlock = blocks.find((b: any) => b.__component === "homepage.hero");
    // const StartAndNewsletterBlock = blocks.find((b: any) => b.__component === "homepage.start-and-newsletter");
    const FAQBlock = blocks.find((b: any) => b.__component === "faq.options2");
  return (
    <div>
        <Layout>
            {faqPageData && <Hero {...faqPageData}/>}
            {FAQBlock && <Faq {...FAQBlock}/>}
            {/* {StartAndNewsletterBlock && <StartAndNewsletter {...StartAndNewsletterBlock}/>} */}
        </Layout>
    </div>
  )
}

export default FAQ