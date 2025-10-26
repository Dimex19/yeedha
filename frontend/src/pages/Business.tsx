import { useState, useEffect } from 'react';
import Download from "../components/business/DownloadYeedha"
import DriveWithYeedha from "../components/business/DriveWithYeedha"
import Faq from "../components/business/Faq"
import Hero from "../components/business/Hero"
import HowYeedhaWorks from "../components/business/HowYeedhaWorks"
import YeedhaAdvantage from "../components/business/YeedhaAdvantage"
// import StartAndNewsletter from "../components/home/StartAndNewsletter"
import Layout from "../components/Layout"
import { getBusinessPageSettings } from "../utils/loaders";


const Driver = () => {
  const [businessPageData, setBusinessPageData] = useState<any>(null);
    
      useEffect(() => {
        const fetchSettings = async () => {
          try {
            const { data } = await getBusinessPageSettings();
            if (data) {
              setBusinessPageData(data);
              console.log("Business Page Data:", data);
            }
          } catch (error) {
            console.error("Failed to fetch landing page settings:", error);
          }
        };
    
        fetchSettings();
      }, []);
  
    const blocks = businessPageData?.blocks || [];
  
    const heroBlock = blocks.find((b: any) => b.__component === "business.hero");
    const benfitBlock = blocks.find((b: any) => b.__component === "business.benefit");
    const howYeedhaWorksBlock = blocks.find((b: any) => b.__component === "business.how-yeedha-works");
    const yeedhaAdvantageBlock = blocks.find((b: any) => b.__component === "business.yeedha-advantage");
    const faqBlock = blocks.find((b: any) => b.__component === "shared.faq"); 
    const downloadBlock = blocks.find((b: any) => b.__component === "homepage.download-section"); 
  return (
    <>
        <Layout>
            {heroBlock && <Hero {...heroBlock}/>}
            {benfitBlock &&  <DriveWithYeedha {...benfitBlock}/>}
            {howYeedhaWorksBlock && <HowYeedhaWorks {...howYeedhaWorksBlock}/>}
            {yeedhaAdvantageBlock && <YeedhaAdvantage {...yeedhaAdvantageBlock} />}
            {faqBlock && <Faq {...faqBlock}/>}
            {downloadBlock && <Download {...downloadBlock}/>}
            {/* <StartAndNewsletter/> */}
        </Layout>
    </>
  )
}

export default Driver