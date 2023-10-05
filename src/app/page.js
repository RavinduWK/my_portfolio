import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TechStack from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import AboutMeSection from "./components/AboutMeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <TechStack />
        <AboutMeSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
