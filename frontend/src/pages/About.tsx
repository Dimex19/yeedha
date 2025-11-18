import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Hero from '../components/about/Hero'
import Empower from '../components/about/Empower'
import Discover from '../components/about/Discover'
import { getAboutPageSettings } from "../utils/loaders";
import Cards from '../components/about/Cards';

const About = () => {
  const [driversPageData, setDriversPageData] = useState<any>(null);
    
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await getAboutPageSettings();
        if (data) {
          setDriversPageData(data);
          console.log("About Page Data:", data);
        }
      } catch (error) {
        console.error("Failed to fetch landing page settings:", error);
      }
    };

    fetchSettings();
  }, []);
  
  const blocks = driversPageData?.blocks || [];

  const quoteBlock = blocks.find((b: any) => b.__component === "shared.quote");
  const empowerBlock = blocks.find((b: any) => b.__component === "about.empower");
  const missionXVisionBlock = blocks.find((b: any) => b.__component === "about.mission-x-vision");
  const CardsBlock = blocks.find((b: any) => b.__component === "shared.cards-with-icon");
  return (
    <div>
        <Layout>
            {driversPageData && <Hero {...driversPageData} />}
            {quoteBlock && <Cards {...quoteBlock} />}
            {empowerBlock && <Empower {...empowerBlock} />}
            <Empower empower={empowerBlock}  missionXVision={missionXVisionBlock}/>
            {CardsBlock && <Discover {...CardsBlock} />}
        </Layout>
    </div>
  )
}

export default About