import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProfessionalSkillset from "./components/SkillsSection";
import Github from "./components/GithubCalendar";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProfessionalSkillset />
        <Github />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
