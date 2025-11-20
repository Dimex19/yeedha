import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Hero from '../components/healthInsurance/Hero'
import HowItWorks from '../components/healthInsurance/HowItWorks'
import HealthCoverage from '../components/healthInsurance/HealthCoverage'
import Eligibility from '../components/healthInsurance/Eligibility'
import Faq from '../components/healthInsurance/Faq'
// import StartAndNewsletter from '../components/home/StartAndNewsletter'
import { getHealthInsurancePageSettings } from "../utils/loaders"
import Loader from "../components/Loader";

const HealthInsurance = () => {
  const [healthInsurancePageData, setHealthInsurancePageData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

        
      useEffect(() => {
        const fetchSettings = async () => {
          try {
            const { data } = await getHealthInsurancePageSettings();
            if (data) {
              setHealthInsurancePageData(data);
              console.log("Health Insurance Page Data:", data);
            }
          } catch (error) {
            console.error("Failed to fetch Health Insurance page settings:", error);
          } finally {
            setLoading(false); 
          }
        };
    
        fetchSettings();
      }, []);
    
      const blocks = healthInsurancePageData?.blocks || [];
    
      const heroBlock = blocks.find((b: any) => b.__component === "health-insurance.hero");
      const healthCoverageBlock = blocks.find((b: any) => b.__component === "health-insurance.yeedha-health-coverage");
      const howItWorksBlock = blocks.find((b: any) => b.__component === "health-insurance.how-it-works");
      const eligibilityBlock = blocks.find((b: any) => b.__component === "health-insurance.eligibility");
      const faqBlock = blocks.find((b: any) => b.__component === "shared.faq")
  return (
    <div>
        <Layout>
            {loading && <Loader />}

            {!loading && (<>
            {heroBlock && <Hero {...heroBlock}/>}
            {howItWorksBlock && <HowItWorks {...howItWorksBlock} />}
            {healthCoverageBlock && <HealthCoverage {...healthCoverageBlock}/>}
            {eligibilityBlock && <Eligibility {...eligibilityBlock}/>}
            {faqBlock && <Faq {...faqBlock}/>}
            {/* <StartAndNewsletter/> */}
            </>)}
        </Layout>
    </div>
  )
}

export default HealthInsurance