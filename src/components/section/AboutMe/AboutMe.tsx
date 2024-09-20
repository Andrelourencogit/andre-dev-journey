import FotoPerfil from '../../../assets/foto.jpg'
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section  id="sobre" className="about-me">
      <h2>Sobre</h2>
      <div className="about-me-content">
        <div className="about-me-photo">
          <img src={FotoPerfil} alt="Minha Foto" />
        </div>
        <div className="about-me-text">
          <p>
            Olá, sou André Lourenço, um desenvolvedor apaixonado por criar soluções inovadoras
            e impactantes. Atualmente, estou cursando bacharelado em Engenharia de Software na Universidade Federal do Rio Grande do Norte (UFRN), com o objetivo de impactar positivamente a vida das pessoas, criando soluções acessíveis e funcionais.
            Atuo como desenvolvedor front-end e, paralelamente, estou expandindo meus conhecimentos em back-end com o propósito de me tornar um desenvolvedor full-stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
