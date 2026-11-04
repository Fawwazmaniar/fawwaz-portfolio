import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Stats } from '../components/Stats'
import { Ticker } from '../components/Ticker'
import { site } from '../content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Home() {
  useDocumentTitle(site.title)
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}
