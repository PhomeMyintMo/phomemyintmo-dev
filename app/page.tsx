
import Home from '@/sections/Home'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'


export default function App() {

  return (
    <main className="space-y-32 mx-auto p-8 sm:p-16 md:p-24">
      <Home />
      <Skills />
      <Projects />
      <Experience />
    </main>
  )
}
