import { useState } from 'react';
import './Portfolio.scss';
import dimapLogo from '../../../assets/img/dimap.jpg';
import polareLogo from '../../../assets/img/polare.jpg';
import sisuLogo from '../../../assets/img/sisu.png';
import besLogo from '../../../assets/img/bes.jpg';
import proexLogo from '../../../assets/img/proex.jpg';
import siaLogo from '../../../assets/img/sia.jpg';
import posgraduacaoLogo from '../../../assets/img/posgraduacao.jpg';
import sisbiLogo from '../../../assets/img/sisbi.png';
import ecictLogo from '../../../assets/img/ecict.png';
import portalLogo from '../../../assets/img/portal.png';
import stiLogo from '../../../assets/img/sti.png';

// Dados de exemplo para os projetos
const projects = [
  {
    name: 'DIMAp',
    company: 'UFRN',
    image: dimapLogo,
    description: 'Projeto de desenvolvimento para o Departamento de Informática e Matemática Aplicada.',
    technologies: ['React', 'CSS', 'JavaScript'],
    link: 'https://dimap.ufrn.br',
  },
  {
    name: 'Polare',
    company: 'Empresa Polare',
    image: polareLogo,
    description: 'Desenvolvimento de interface e integração com API externa.',
    technologies: ['Vue.js', 'HTML', 'Tailwind'],
    link: 'https://polare.ufrn.br/',
  },
  {
    name: 'BES',
    company: 'Banco de Exemplo do Brasil',
    image: besLogo,
    description: 'Sistema para gestão de transações financeiras.',
    technologies: ['React', 'CSS', 'JavaScript'],
    link: 'https://dimap.ufrn.br/bes/',
  },
  {
    name: 'SISU',
    company: 'MEC',
    image: sisuLogo,
    description: 'Plataforma de inscrição e seleção de estudantes.',
    technologies: ['Vue.js', 'HTML', 'Tailwind'],
    link: 'https://sisu.ufrn.br/',
  },
  {
    name: 'SIA',
    company: 'UFRN',
    image: siaLogo,
    description: 'Sistema acadêmico integrado da UFRN.',
    technologies: ['React', 'CSS', 'JavaScript'],
    link: 'https://sia.ufrn.br',
  },
  {
    name: 'Pós Graduação',
    company: 'UFRN',
    image: posgraduacaoLogo,
    description: 'Descrição do Projeto 2.',
    technologies: ['Vue.js', 'HTML', 'Tailwind'],
    link: 'https://posgraduacao.ufrn.br/',
  },
  {
    name: 'Proex',
    company: 'UFRN',
    image: proexLogo,
    description: 'Descrição do Projeto 2.',
    technologies: ['Vue.js', 'HTML', 'Tailwind'],
    link: 'https://proex.ufrn.br/',
  },
  {
    name: 'Sisbi',
    company: 'UFRN',
    image: sisbiLogo,
    description: 'Descrição do Projeto 2.',
    technologies: ['Vue.js', 'HTML', 'Tailwind'],
    link: 'https://sisbi.ufrn.br/',
  },
  {
    name: 'ECICT',
    company: 'UFRN',
    image: ecictLogo,
    description: 'Descrição do Projeto 1.',
    technologies: ['React', 'CSS', 'JavaScript'],
    link: 'https://cic.propesq.ufrn.br/',
  },
  {
    name: 'STI',
    company: 'UFRN',
    image: stiLogo,
    description: 'Descrição do Projeto 2.',
    technologies: ['Vue.js', 'HTML', 'Tailwind'],
    link: 'https://sti.ufrn.br/',
  },
  {
    name: 'Portal UFRN',
    company: 'UFRN',
    image: portalLogo,
    description: 'Descrição do Projeto 2.',
    technologies: ['Vue.js', 'HTML', 'Tailwind'],
    link: 'https://www.ufrn.br/',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.name}
            className="portfolio-item"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="portfolio-image"
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.company}</p>
            <p>{selectedProject.description}</p>
            <p><strong>Tecnologias:</strong> {selectedProject.technologies.join(', ')}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              Visite o site
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
