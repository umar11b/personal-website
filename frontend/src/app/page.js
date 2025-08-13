import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import EndorsementsSection from "./components/EndorsementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="mt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EndorsementsSection />
      </div>
    </main>
  );
}
