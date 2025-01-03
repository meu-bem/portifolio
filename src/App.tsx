import './App.css'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Info from './components/Info'
import PracticeExperience from './components/PracticeExperience'
import VoluteerExperience from './components/VoluteerExperience'
import Window from './components/Window'

function App() {

  return (
    <Window>
      <Info />
      <AboutMe />
      <Education />
      <PracticeExperience />
      <VoluteerExperience />
    </Window>
  )
}

export default App
