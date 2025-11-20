import { useState, useEffect } from 'react';
import DoMore from '../components/home/DoMore';
import Hero from '../components/home/Hero';
import RideAndEarn from '../components/home/RideAndEarn';
import Extras from '../components/home/Extras';
// import StartAndNewsletter from '../components/home/StartAndNewsletter';
import Download from '../components/home/Download';
import About from '../components/home/About';
import Layout from '../components/Layout';
import { getLandingPageSettings } from "../utils/loaders";
import Loader from "../components/Loader";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await getLandingPageSettings();
        if (data) {
          setLandingPageData(data);
          console.log("Landing Page Data:", data);
        }
      } catch (error) {
        console.error("Failed to fetch landing page settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const blocks = landingPageData?.blocks || [];

  const heroBlock = blocks.find((b: any) => b.__component === "homepage.hero");
  const doMoreBlock = blocks.find((b: any) => b.__component === "homepage.do-more-section");
  const aboutBlock = blocks.find((b: any) => b.__component === "homepage.about-section");
  const downloadBlock = blocks.find((b: any) => b.__component === "homepage.download-section");
  const rideAndEarnBlock = blocks.find((b: any) => b.__component === "homepage.ride-and-earn");
  const ExtrasBlock = blocks.find((b: any) => b.__component === "homepage.extra-section");
  // const StartAndNewsletterBlock = blocks.find((b: any) => b.__component === "homepage.start-and-newsletter");

  return (
    <Layout>
      {loading && <Loader />}

      {!loading && (
        <>
          {heroBlock && <Hero {...heroBlock} />}
          {doMoreBlock && <DoMore {...doMoreBlock} />}
          {aboutBlock && <About {...aboutBlock} />}
          {rideAndEarnBlock && <RideAndEarn {...rideAndEarnBlock} />}
          {ExtrasBlock && <Extras {...ExtrasBlock} />}
          {downloadBlock && <Download {...downloadBlock} />}
          {/* {StartAndNewsletterBlock && <StartAndNewsletter {...StartAndNewsletterBlock}/>} */}
        </>
      )}
    </Layout>
  );
};

export default Home;
