//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/section/AboutMe/AboutMe';
import Education from './components/section/Education/Education';
import Experience from './components/section/Experience/Experience';
import Skills from './components/section/Skills/Skill';
import NavBar  from './components/structure/NavBar/NavBar';

function App() {
  return (
    <>
      <div className="App">
      <NavBar/>
      <AboutMe/>
      <Education/>
      <Experience/>
      <Skills/>
      <Portfolio/>
    </div>
    </>
  )
}

export default App
