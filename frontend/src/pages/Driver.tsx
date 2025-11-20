import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import DriveWithYeedha from "../components/driver/DriveWithYeedha";
import Faq from "../components/driver/Faq";
import Hero from "../components/driver/Hero";
import HowYeedhaWorks from "../components/driver/HowYeedhaWorks";
import YeedhaAdvantage from "../components/driver/YeedhaAdvantage";
import Layout from "../components/Layout";
import { getDriversPageSettings } from "../utils/loaders";
import Loader from "../components/Loader";

const Driver = () => {
  const [driversPageData, setDriversPageData] = useState<any>(null);
  const [activeDriverType, setActiveDriverType] = useState<string>("E-Hailing");
  const location = useLocation(); // 👈 Get current URL
  const [loading, setLoading] = useState<boolean>(true);

  // ✅ Sync state with ?tab= query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveDriverType(tab);
    }
  }, [location.search]);

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
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const blocks = driversPageData?.blocks || [];

  const heroBlock = blocks.find((b: any) => b.__component === "business.hero");
  const benefitBlock = blocks.find((b: any) => b.__component === "business.benefit");
  const howYeedhaWorksBlock = blocks.find((b: any) => b.__component === "business.how-yeedha-works");
  const yeedhaAdvantageBlock = blocks.find((b: any) => b.__component === "business.yeedha-advantage");
  const faqBlock = blocks.find((b: any) => b.__component === "shared.faq");

  return (
    <Layout>
      {loading && <Loader />}

      {!loading && (
        <>
      {heroBlock && <Hero {...heroBlock} />}

      {benefitBlock && (
        <DriveWithYeedha
          {...benefitBlock}
          activeButton={activeDriverType}
          setActiveButton={setActiveDriverType}
        />
      )}

      {howYeedhaWorksBlock && (
        <HowYeedhaWorks
          {...howYeedhaWorksBlock}
          activeButton={activeDriverType}
        />
      )}

      {yeedhaAdvantageBlock && <YeedhaAdvantage {...yeedhaAdvantageBlock} />}
      {faqBlock && <Faq activeButton={activeDriverType} {...faqBlock} />}
        </>
      )}
    </Layout>
  );
};

export default Driver;
