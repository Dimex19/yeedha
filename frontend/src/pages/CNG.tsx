import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Hero from '../components/cng/Hero'
import HowItWorks from '../components/cng/HowItWorks'
import CarReady from '../components/cng/CarReady'
import WhyThisMatter from '../components/cng/WhyThisMatter'
import Faq from '../components/cng/Faq'
import ApplyForConversion from '../components/cng/ApplyForConversion'
// import StartAndNewsletter from '../components/home/StartAndNewsletter'
import { getCNGPageSettings } from "../utils/loaders"
import Loader from "../components/Loader";

const HealthInsurance = () => {
  const [CNGPageData, setCNGPageData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
      const fetchSettings = async () => {
        try {
          const { data } = await getCNGPageSettings();
          if (data) {
            setCNGPageData(data);
            console.log("CNG Page Data:", data);
          }
        } catch (error) {
          console.error("Failed to fetch CNG page settings:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchSettings();
    }, []);
  
    const blocks = CNGPageData?.blocks || [];
  
    const heroBlock = blocks.find((b: any) => b.__component === "health-insurance.hero");
    const whyThisMatterBlock = blocks.find((b: any) => b.__component === "health-insurance.yeedha-health-coverage");
    const howItWorksBlock = blocks.find((b: any) => b.__component === "health-insurance.how-it-works");
    const carReadyBlock = blocks.find((b: any) => b.__component === "health-insurance.car-ready");
    const faqBlock = blocks.find((b: any) => b.__component === "shared.faq")
  return (
    <div>
        <Layout>
          {loading && <Loader />}

      {!loading && (
        <>
            {heroBlock && <Hero {...heroBlock}/>}
            {whyThisMatterBlock && <WhyThisMatter {...whyThisMatterBlock}/>}
            {carReadyBlock && <CarReady {...carReadyBlock}/>}
            {howItWorksBlock && <HowItWorks {...howItWorksBlock} />}
            {faqBlock && <Faq {...faqBlock}/>}
            <ApplyForConversion/>
            {/* <StartAndNewsletter/> */}
        </>
      )}
        </Layout>
    </div>
  )
}

export default HealthInsurance