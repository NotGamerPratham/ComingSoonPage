import { ThemeProvider } from "@/components/theme-provider"
import { ParticleBackground } from "@/components/particle-background"
import { Nav } from "@/components/nav"
import { HeroSection } from "@/components/hero-section"
import { TeaserSection } from "@/components/teaser-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexus-theme">
      <div className="relative min-h-screen bg-background text-foreground antialiased">
        <ParticleBackground />
        <Nav />
        <main>
          <HeroSection />
          <TeaserSection />
          <RoadmapSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
