import AboutPrincipel from "@/components/AboutPrincipel";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NoticBoardScection from "@/components/NoticBoardScection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SideBarSection from "@/components/SideBarSection";
import StatisticSection from "@/components/StatisticSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <NoticBoardScection />
          <AboutSection />
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <SideBarSection />
        </div>
      </div>

      <AboutPrincipel />
      <StatisticSection />
      <Footer />
    </div>
  );
}
