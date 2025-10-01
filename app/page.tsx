import Hero from "@/components/hero"
import Projects from "@/components/projects"
import HobbyProjects from "@/components/hobby-projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <HobbyProjects />
      <Contact />
    </main>
  )
}
