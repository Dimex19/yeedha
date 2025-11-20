// import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Hero from '../components/autoServices/Hero'
import HowItWorks from '../components/autoServices/HowItWorks'
import HealthCoverage from '../components/autoServices/HealthCoverage'
import { getAutoServicePageSettings } from "../utils/loaders";
import FindMechanic from '../components/autoServices/FindMechanic'
import Loader from "../components/Loader";

const HealthInsurance = () => {
  const [autoServicePageData, setAutoServicePageData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await getAutoServicePageSettings();
        if (data) {
          setAutoServicePageData(data);
          console.log("Auto Service Page Data:", data);
        }
      } catch (error) {
        console.error("Failed to fetch Auto Service page settings:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchSettings();
  }, []);

  const blocks = autoServicePageData?.blocks || [];

  const heroBlock = blocks.find((b: any) => b.__component === "health-insurance.hero");
  const healthCoverageBlock = blocks.find((b: any) => b.__component === "health-insurance.yeedha-health-coverage");
  const howItWorksBlock = blocks.find((b: any) => b.__component === "auto-service.how-it-works");

  return (
    <div>
        <Layout>
          {loading && <Loader />}

      {!loading && (
        <>
            {heroBlock && <Hero {...heroBlock}/>}
            {howItWorksBlock && <HowItWorks {...howItWorksBlock}/>}
            {healthCoverageBlock && <HealthCoverage {...healthCoverageBlock}/>}
            <FindMechanic/>
            {/* <StartAndNewsletter/> */}
        </>
      )}
        </Layout>
    </div>
  )
}

export default HealthInsurance