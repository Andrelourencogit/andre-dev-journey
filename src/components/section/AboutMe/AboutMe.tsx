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
            e impactantes. Com experiência em tecnologias como React, TypeScript e CSS, busco
            constantemente aprimorar minhas habilidades e contribuir para projetos desafiadores.
            Além do desenvolvimento, tenho interesse em design e usabilidade, o que me ajuda a
            criar interfaces intuitivas e atraentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
