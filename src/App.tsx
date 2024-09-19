//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import AboutMe from './components/section/AboutMe/AboutMe';
import Education from './components/section/Education/Education';
import NavBar  from './components/structure/NavBar/NavBar';

function App() {
  return (
    <>
      <div className="App">
      <NavBar/>
      <AboutMe/>
      <Education/>
    </div>
    </>
  )
}

export default App
