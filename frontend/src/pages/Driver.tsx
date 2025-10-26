import { useState, useEffect } from 'react';
import DriveWithYeedha from "../components/driver/DriveWithYeedha"
import Faq from "../components/driver/Faq"
import Hero from "../components/driver/Hero"
import HowYeedhaWorks from "../components/driver/HowYeedhaWorks"
import YeedhaAdvantage from "../components/driver/YeedhaAdvantage"
import Layout from "../components/Layout"
import { getDriversPageSettings } from "../utils/loaders";

const Driver = () => {
  const [driversPageData, setDriversPageData] = useState<any>(null);
  
    useEffect(() => {
      const fetchSettings = async () => {
        try {
          const { data } = await getDriversPageSettings();
          if (data) {
            setDriversPageData(data);
            console.log("Drivers Page Data:", data);
          }
        } catch (error) {
          console.error("Failed to fetch landing page settings:", error);
        }
      };
  
      fetchSettings();
    }, []);

  const blocks = driversPageData?.blocks || [];

  const heroBlock = blocks.find((b: any) => b.__component === "business.hero");
  const benfitBlock = blocks.find((b: any) => b.__component === "business.benefit");
  const howYeedhaWorksBlock = blocks.find((b: any) => b.__component === "business.how-yeedha-works");
  const yeedhaAdvantageBlock = blocks.find((b: any) => b.__component === "business.yeedha-advantage");
  const faqBlock = blocks.find((b: any) => b.__component === "shared.faq");

  return (
    <>
        <Layout>
            {heroBlock && <Hero {...heroBlock}/>}
            {benfitBlock &&  <DriveWithYeedha {...benfitBlock}/>}
            {howYeedhaWorksBlock && <HowYeedhaWorks {...howYeedhaWorksBlock}/>}
            {yeedhaAdvantageBlock && <YeedhaAdvantage {...yeedhaAdvantageBlock} />}
            {faqBlock && <Faq {...faqBlock}/>}
        </Layout>
    </>
  )
}

export default Driver