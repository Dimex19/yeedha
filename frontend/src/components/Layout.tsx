import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { getGlobalSettings } from "../utils/loaders";
import StartAndNewsletter from "./home/StartAndNewsletter";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [headerData, setHeaderData] = useState<any>(null);
  const [footerData, setFooterData] = useState<any>(null);
  const [startAndNewsletterData, setStartAndNewsletterData] = useState<any>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await getGlobalSettings();
        if (data) {
          setHeaderData(data.header);
          setFooterData(data.footer);
          setStartAndNewsletterData(data.startAndNewsletter);
          console.log("Global Settings Data:", data);
        }
      } catch (error) {
        console.error("Failed to fetch global settings:", error);
      }
    };

    fetchSettings();
  }, []);

  const headerTheme =
    location.pathname !== "/drivers" && location.pathname !== "/business"
      ? {
          logoColor: "blue",
          linkColor: "black",
          buttonBg: "#2563EB",
          buttonText: "white",
        }
      : {
          logoColor: "white",
          linkColor: "white",
          buttonBg: "white",
          buttonText: "#2563EB",
        };

  return (
    <div>
      <Header {...headerTheme} data={headerData} />
      <main>{children}</main>
      <StartAndNewsletter {...({ data: startAndNewsletterData } as any)} />
      <Footer {...({ data: footerData } as any)} />
    </div>
  );
}
