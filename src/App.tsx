import './App.scss'
import AboutMe from './components/section/AboutMe/AboutMe';
import Education from './components/section/Education/Education';
import Experience from './components/section/Experience/Experience';
import Skills from './components/section/Skills/Skill';
import Portfolio from './components/section/Portfolio/Portfolio';
import Footer from './components/structure/Footer/Footer';
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
      <Footer/>
    </div>
    </>
  )
}

export default App
