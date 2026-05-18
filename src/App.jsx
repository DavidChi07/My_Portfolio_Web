import './index.css'
import './App.css'
import { cvData } from './data/cvData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Languages from './components/Languages'

function App() {
  return (
    <>
      <Navbar name={cvData.personal.name} />
      <main>
        <Hero personal={cvData.personal} />
        <Experience experience={cvData.experience} />
        <Skills skills={cvData.skills} />
        <Education education={cvData.education} />
        <Languages languages={cvData.languages} />
      </main>
      <footer className="footer container">
        <p>© {new Date().getFullYear()} {cvData.personal.name} — Mérida, Yucatán</p>
      </footer>
    </>
  )
}

export default App
