import { Outlet } from "react-router-dom";

import Navbar from "@/components/navbars/Navbar";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/navbars/MobileNavbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="w-full bg-main-background mx-auto">
      <ScrollToTop />
      <Navbar />
      <MobileNavbar />
      <main id="bodyBlur" className="pt-14">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
