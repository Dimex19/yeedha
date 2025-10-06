import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // pick theme based on route
  const headerTheme =
    location.pathname !== "/driver" && location.pathname !== "/business"
      ? { logoColor: "blue", linkColor: "black", buttonBg: "#2563EB", buttonText: "white" } : { logoColor: "white", linkColor: "white", buttonBg: "white", buttonText: "#2563EB" }

  return (
    <div className="">
      <Header {...headerTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
