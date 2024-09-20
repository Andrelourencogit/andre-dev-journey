import './Footer.scss';
import emailLogo from '../../../assets/icons/email.svg';
import linkedinLogo from '../../../assets/icons/linkedin.svg';
import githubLogo from '../../../assets/icons/github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024, por Andre Lourenço.</p>
      <div className="footer-icons">
        <a href="mailto:lourencoandre80@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailLogo} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/andr%C3%A9-louren%C3%A7o-734284109/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Andrelourencogit" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
