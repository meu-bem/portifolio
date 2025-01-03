import './App.css'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Info from './components/Info'
import PracticeExperience from './components/PracticeExperience'
import Projects from './components/Projects'
import VoluteerExperience from './components/VoluteerExperience'
import Window from './components/Window'

function App() {

  return (
    <Window>
      <Info />
      <Projects />
      <AboutMe />
      <Education />
      <PracticeExperience />
      <VoluteerExperience />
      <p
        className="status-bar-field"
        style={{
          width: "max-content",
          padding: 8,
        }}
      >
        Powered by <a target='_blank' href="https://jdan.github.io/98.css">98.css</a>
      </p>
    </Window>
  )
}

export default App
