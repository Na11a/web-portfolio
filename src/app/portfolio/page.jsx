import {
  Navbar,
  AboutSection,
  EmailSection,
  Footer,
  AchievementsSection,
  Experience,
  HeroSection
} from "./components/index";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Experience />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
