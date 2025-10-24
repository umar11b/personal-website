import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import WorkshopsSection from "./components/WorkshopsSection";
import ProjectsSection from "./components/ProjectsSection";
import EndorsementsSection from "./components/EndorsementsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="mt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkshopsSection />
        <ProjectsSection />
        <EndorsementsSection />
        <ContactSection />
      </div>
    </main>
  );
}
