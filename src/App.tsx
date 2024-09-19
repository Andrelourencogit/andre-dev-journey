//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import NavBar  from './components/structure/NavBar/NavBar';

function App() {
  return (
    <>
      <div className="App">
      <NavBar/>

      {/* Conteúdo das seções */}
      <section id="home"><h2>Bem-vindo ao Início</h2></section>
      <section id="about"><h2>Sobre Mim</h2></section>
      <section id="projects"><h2>Meus Projetos</h2></section>
      <section id="skills"><h2>Minhas Habilidades</h2></section>
      <section id="contact"><h2>Contato</h2></section>
    </div>
    </>
  )
}

export default App
